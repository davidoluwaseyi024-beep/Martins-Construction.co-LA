import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/lib/content";

export default function ServiceFeature({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const alignEnd = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className="relative isolate flex min-h-[90vh] scroll-mt-20 items-end overflow-hidden border-b border-line/40"
    >
      <ParallaxImage src={service.image} alt={service.name} strength={0.12} />
      <div
        className={`absolute inset-0 ${
          alignEnd
            ? "bg-linear-to-l from-espresso/85 via-espresso/40 to-transparent"
            : "bg-linear-to-r from-espresso/85 via-espresso/40 to-transparent"
        }`}
      />
      <div className="absolute inset-0 bg-espresso/35 lg:hidden" />

      <div
        className={`relative mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 ${
          alignEnd ? "flex justify-end" : ""
        }`}
      >
        <div className={`max-w-lg ${alignEnd ? "text-right" : ""}`}>
          <Reveal direction={alignEnd ? "right" : "left"}>
            <h2 className="font-display text-4xl leading-tight text-paper drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:text-5xl lg:drop-shadow-none">
              {service.name}
            </h2>
          </Reveal>
          <Reveal direction={alignEnd ? "right" : "left"} delay={0.1}>
            <p className="mt-4 text-lg text-gold-soft drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] lg:drop-shadow-none">{service.short}</p>
          </Reveal>
          <Reveal direction={alignEnd ? "right" : "left"} delay={0.18}>
            <p className="mt-4 text-cream-soft/95 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] lg:text-cream-soft/85 lg:drop-shadow-none">
              {service.description}
            </p>
          </Reveal>
          <Reveal direction={alignEnd ? "right" : "left"} delay={0.26}>
            <ul
              className={`mt-5 flex flex-wrap gap-2 ${
                alignEnd ? "justify-end" : "justify-start"
              }`}
            >
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-cream-soft/30 bg-espresso/40 px-3.5 py-1.5 text-xs text-cream-soft/95 backdrop-blur-sm lg:bg-transparent lg:text-cream-soft/90 lg:backdrop-blur-none"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
