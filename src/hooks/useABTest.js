import { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";

const TEST_ID = "quote_form_title";

const ALL_PHRASES = [
  "Begin Immortalizing Champions Today",
  "Start Building Generational Legacy Today",
  "Immortalize Greatness For Generations",
  "Celebrate Champions. Begin Their Legacy.",
  "Honor Their Legacy Today",
  "Immortalize Champions Today",
  "Begin Building Legacy Today",
  "Celebrate Greatness In Bronze Today",
  "Preserve Athletic Legacy Today",
];

const EPSILON = 0.2;
const MIN_IMPRESSIONS = 30;
const TOP_N_KEEP = 5;

function safeArray(val) {
  return Array.isArray(val) ? val : [];
}

function pickVariant(variants) {
  const active = safeArray(variants).filter((v) => v.is_active !== false);
  if (!active.length) return null;

  if (Math.random() < EPSILON) {
    return active[Math.floor(Math.random() * active.length)];
  }

  return active.reduce((best, v) => {
    const bestRate = (best.conversions + 1) / (best.impressions + 2);
    const vRate = (v.conversions + 1) / (v.impressions + 2);
    return vRate > bestRate ? v : best;
  });
}

async function pruneIfNeeded(variants) {
  const active = safeArray(variants).filter((v) => v.is_active !== false);
  if (active.length <= TOP_N_KEEP) return;

  const evaluable = active.filter((v) => (v.impressions || 0) >= MIN_IMPRESSIONS);
  if (evaluable.length < 2) return;

  const sorted = [...evaluable].sort((a, b) => {
    const rateA = (a.conversions + 1) / (a.impressions + 2);
    const rateB = (b.conversions + 1) / (b.impressions + 2);
    return rateA - rateB;
  });

  await base44.entities.ABTestVariant.update(sorted[0].id, { is_active: false });
}

export function useABTest() {
  const [variant, setVariant] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const impressionTracked = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        let variants = await base44.entities.ABTestVariant.filter({ test_id: TEST_ID });
        variants = safeArray(variants);

        // Seed any missing phrases
        const existing = new Set(variants.map((v) => v.phrase));
        const missing = ALL_PHRASES.filter((p) => !existing.has(p));
        for (const phrase of missing) {
          const created = await base44.entities.ABTestVariant.create({
            test_id: TEST_ID,
            phrase,
            impressions: 0,
            conversions: 0,
            clicks: 0,
            is_active: true,
          });
          if (created) variants.push(created);
        }

        await pruneIfNeeded(variants);

        variants = safeArray(
          await base44.entities.ABTestVariant.filter({ test_id: TEST_ID })
        );

        const chosen = pickVariant(variants);
        if (!chosen || cancelled) return;

        setVariant(chosen.phrase);
        setVariantId(chosen.id);

        if (!impressionTracked.current) {
          impressionTracked.current = true;
          await base44.entities.ABTestVariant.update(chosen.id, {
            impressions: (chosen.impressions || 0) + 1,
          });
        }
      } catch (_err) {
        // AB test is non-critical — never crash the app
      }
    }

    init();
    return () => { cancelled = true; };
  }, []);

  const trackConversion = async () => {
    if (!variantId) return;
    try {
      const current = safeArray(
        await base44.entities.ABTestVariant.filter({ test_id: TEST_ID })
      );
      const v = current.find((x) => x.id === variantId);
      if (v) {
        await base44.entities.ABTestVariant.update(variantId, {
          conversions: (v.conversions || 0) + 1,
        });
      }
    } catch (_err) {}
  };

  const trackClick = async () => {
    if (!variantId) return;
    try {
      const current = safeArray(
        await base44.entities.ABTestVariant.filter({ test_id: TEST_ID })
      );
      const v = current.find((x) => x.id === variantId);
      if (v) {
        await base44.entities.ABTestVariant.update(variantId, {
          clicks: (v.clicks || 0) + 1,
        });
      }
    } catch (_err) {}
  };

  return { variant, trackConversion, trackClick };
}