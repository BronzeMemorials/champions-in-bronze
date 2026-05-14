import FadeIn from "./FadeIn";

export default function FeatureList({ features }) {
  const safeFeatures = Array.isArray(features) ? features : [];
  if (!safeFeatures.length) return null;
  return (
    <ul className="mt-10 space-y-4 border-l border-bronze/30 pl-6">
      {safeFeatures.map((f, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <li className="flex items-center gap-4">
            <span className="w-2 h-2 bg-gold flex-shrink-0" />
            <span className="font-sans uppercase text-sm tracking-widest text-parchment/80">{f}</span>
          </li>
        </FadeIn>
      ))}
    </ul>
  );
}