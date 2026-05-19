import FadeIn from "./FadeIn";

/**
 * ProcessGallery — shows correlated "Photo → Clay Mold → Finished Bronze" sets
 * Each `group` = { label, caption, steps: [{ img, tag, alt }] }
 */
export default function ProcessGallery({ groups = [], title = "From Photo to Bronze", subtitle = "" }) {
  if (!groups.length) return null;

  return (
    <section className="py-24 border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Process</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
            {subtitle && <p className="text-parchment/55 font-sans text-sm mt-3 max-w-2xl">{subtitle}</p>}
          </div>
        </FadeIn>

        <div className="space-y-20">
          {groups.map((group, gi) => (
            <FadeIn key={gi} delay={gi * 0.05}>
              <div>
                {group.label && (
                  <p className="font-serif text-xl text-parchment/80 mb-1">{group.label}</p>
                )}
                {group.caption && (
                  <p className="text-parchment/45 font-sans text-xs mb-5 max-w-2xl">{group.caption}</p>
                )}
                <div className={`grid gap-4 ${group.steps.length === 1 ? "grid-cols-1 max-w-sm" : group.steps.length === 2 ? "grid-cols-2 max-w-2xl" : "grid-cols-3"}`}>
                  {group.steps.map((step, si) => (
                    <div key={si} className="group relative overflow-hidden rounded-sm bg-black/20">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={step.img}
                          alt={step.alt || group.label}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {step.tag && (
                        <div className="absolute top-2 left-2">
                          <span className={`text-xs font-sans uppercase tracking-[0.1em] px-2 py-0.5 rounded-sm font-semibold ${
                            step.tag === "Photo" ? "bg-blue-900/80 text-blue-200" :
                            step.tag === "Clay Mold" ? "bg-amber-900/80 text-amber-200" :
                            "bg-gold/30 text-gold"
                          }`}>
                            {step.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}