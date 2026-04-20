import FadeIn from "./FadeIn";

export default function SocialProofBar({ logos, caption }) {
  return (
    <section className="py-16 border-y border-bronze/10 bg-obsidian/80">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-parchment/40 text-xs font-sans tracking-[0.3em] uppercase mb-10">
            {caption}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-parchment/25 hover:text-gold/60 transition-colors duration-500"
              >
                <span className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase font-bold">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}