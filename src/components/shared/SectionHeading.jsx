import FadeIn from "./FadeIn";

export default function SectionHeading({ label, title, subtitle, align = "left", light = false }) {
  return (
    <FadeIn>
      <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
        {label && (
          <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">
            {label}
          </span>
        )}
        <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl mt-3 leading-tight ${light ? "text-parchment" : "text-parchment"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-parchment/70" : "text-parchment/60"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}