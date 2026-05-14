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

// Epsilon-greedy multi-armed bandit:
// EPSILON % of the time → explore (random active variant)
// (1-EPSILON) % of the time → exploit (highest conversion rate among active variants)
// Variants with >= MIN_IMPRESSIONS and conversion rate < PRUNE_THRESHOLD get deactivated
// Once only TOP_N active variants remain, stop pruning
const EPSILON = 0.2;
const MIN_IMPRESSIONS = 30;
const PRUNE_THRESHOLD = 0.0; // will auto-prune bottom performers once we have enough data
const TOP_N_KEEP = 5; // stop pruning once we're down to this many

function pickVariant(variants) {
  const safeVariants = Array.isArray(variants) ? variants : [];
  const active = safeVariants.filter((v) => v.is_active !== false);
  if (!active.length) return null;

  const explore = Math.random() < EPSILON;
  if (explore) {
    return active[Math.floor(Math.random() * active.length)];
  }

  // Exploit: pick highest conversion rate (conversions / impressions), with Laplace smoothing
  return active.reduce((best, v) => {
    const bestRate = (best.conversions + 1) / (best.impressions + 2);
    const vRate = (v.conversions + 1) / (v.impressions + 2);
    return vRate > bestRate ? v : best;
  });
}

async function pruneIfNeeded(variants) {
  const safeVariants = Array.isArray(variants) ? variants : [];
  const active = safeVariants.filter((v) => v.is_active !== false);
  if (active.length <= TOP_N_KEEP) return; // already at target

  // Find variants with enough impressions to evaluate
  const evaluable = active.filter((v) => (v.impressions || 0) >= MIN_IMPRESSIONS);
  if (evaluable.length < 2) return; // not enough data yet

  // Sort by conversion rate ascending — prune the worst one
  const sorted = [...evaluable].sort((a, b) => {
    const rateA = (a.conversions + 1) / (a.impressions + 2);
    const rateB = (b.conversions + 1) / (b.impressions + 2);
    return rateA - rateB;
  });

  const worst = sorted[0];
  await base44.entities.ABTestVariant.update(worst.id, { is_active: false });
}

export function useABTest() {
  const [variant, setVariant] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const impressionTracked = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      // Load existing variants for this test
      let variants = await base44.entities.ABTestVariant.filter({ test_id: TEST_ID });
      if (!Array.isArray(variants)) variants = [];

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
        variants.push(created);
      }

      // Auto-prune losers if we have enough data
      await pruneIfNeeded(variants);
      // Refresh after potential prune
      variants = await base44.entities.ABTestVariant.filter({ test_id: TEST_ID });
      if (!Array.isArray(variants)) variants = [];

      const chosen = pickVariant(variants);
      if (!chosen || cancelled) return;

      setVariant(chosen.phrase);
      setVariantId(chosen.id);

      // Track impression (once per mount)
      if (!impressionTracked.current) {
        impressionTracked.current = true;
        await base44.entities.ABTestVariant.update(chosen.id, {
          impressions: (chosen.impressions || 0) + 1,
        });
      }
    }

    init();
    return () => { cancelled = true; };
  }, []);

  // Call this on form submit to record a conversion
  const trackConversion = async () => {
    if (!variantId) return;
    const current = await base44.entities.ABTestVariant.filter({ test_id: TEST_ID });
    const safeCurrentArr = Array.isArray(current) ? current : [];
    const v = safeCurrentArr.find((x) => x.id === variantId);
    if (v) {
      await base44.entities.ABTestVariant.update(variantId, {
        conversions: (v.conversions || 0) + 1,
      });
    }
  };

  // Call this when user first interacts with the form (clicks into it)
  const trackClick = async () => {
    if (!variantId) return;
    const current = await base44.entities.ABTestVariant.filter({ test_id: TEST_ID });
    const safeCurrentArr = Array.isArray(current) ? current : [];
    const v = safeCurrentArr.find((x) => x.id === variantId);
    if (v) {
      await base44.entities.ABTestVariant.update(variantId, {
        clicks: (v.clicks || 0) + 1,
      });
    }
  };

  return { variant, trackConversion, trackClick };
}