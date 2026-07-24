import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { partners } from "@/lib/content";

export default function PartnersSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          Partners &amp; Certifications
        </p>
        <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
          Organizations we work with and belong to.
        </h2>
      </Reveal>

      <StaggerGroup
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        stagger={0.06}
      >
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="group flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-paper p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg hover:shadow-espresso/5"
            >
              <div
                className={`relative h-12 w-full grayscale transition-all duration-300 group-hover:grayscale-0 ${
                  partner.onDark ? "rounded-lg bg-espresso p-2" : ""
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="160px"
                  className={partner.onDark ? "object-contain p-1" : "object-contain"}
                />
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="mt-6 text-xs text-stone">
        Logos link to each organization&apos;s official site.
      </p>
    </section>
  );
}
