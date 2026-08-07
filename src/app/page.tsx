import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ProcessSection from "@/components/ProcessSection";
import ImageBanner from "@/components/ImageBanner";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustBadges from "@/components/TrustBadges";
import RecentTransformations from "@/components/RecentTransformations";
import Reveal from "@/components/motion/Reveal";
import { company, services, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustBar />

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            What We Build
          </p>
          <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
            Residential &amp; commercial construction, done right.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay transition-colors hover:text-clay-dark"
          >
            Explore all services
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </section>

      <ImageBanner
        src="/images/texture/dusk-exterior.jpg"
        alt="Finished home exterior at dusk"
        eyebrow="Craftsmanship"
        heading="Built for the way Los Angeles lives, day and night."
      />

      <ProcessSection />

      <RecentTransformations />

      <section className="bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
              Built on communication, not just construction.
            </h2>
            <p className="mt-4 text-espresso-soft/80">
              We get to know our clients on a first name basis and treat every
              project like family, because a remodel only feels successful
              when you were part of it the whole way through.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.1} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay" />
                <div>
                  <h3 className="font-display text-lg text-espresso">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft/80">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-12">
            <TrustBadges variant="default" />
          </Reveal>
        </div>
      </section>

      <ImageBanner
        src="/images/texture/steel-construction.jpg"
        alt="Commercial construction project underway"
        eyebrow="Residential & Commercial"
        heading={`Proudly serving the greater Los Angeles area for ${company.yearsInBusiness} years.`}
      />

      <TestimonialCarousel />

      <CTASection />
    </>
  );
}
