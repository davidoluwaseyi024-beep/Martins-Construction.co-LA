import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ServiceFeature from "@/components/ServiceFeature";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { services, serviceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Martins Construction",
  description:
    "Kitchen and bathroom remodeling, room additions, ADUs, and custom home building from a licensed Los Angeles general contractor.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Services
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl text-espresso sm:text-5xl">
              Every phase of home improvement, one dedicated team.
            </h1>
            <p className="mt-5 max-w-xl text-espresso-soft/80">
              No project is too big or too small. We do all phases of home
              improvement and construction, residential and commercial.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceFeature key={service.slug} service={service} index={i} />
      ))}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl text-espresso">Where We Work</h2>
              <p className="mt-3 max-w-2xl text-espresso-soft/80">
                Martins Construction serves homeowners and businesses
                throughout the greater Los Angeles area, including:
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line bg-cream-soft px-4 py-1.5 text-sm text-espresso-soft"
                >
                  {area}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal
            direction="right"
            delay={0.1}
            className="relative aspect-4/3 overflow-hidden rounded-2xl"
          >
            <ParallaxImage
              src="/images/texture/aerial-neighborhood.jpg"
              alt="Aerial view of a Los Angeles residential neighborhood"
              strength={0.1}
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
