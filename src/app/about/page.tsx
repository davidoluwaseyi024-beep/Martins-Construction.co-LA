import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import ImageBanner from "@/components/ImageBanner";
import PartnersSection from "@/components/PartnersSection";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ParallaxImage from "@/components/motion/ParallaxImage";
import {
  accreditations,
  approach,
  awards,
  company,
  values,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Martins Construction",
  description:
    "31 years of licensed general contracting in Los Angeles — Martins Construction's history, values, and credentials.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal direction="left">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              About the Company
            </p>
            <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
              {company.yearsInBusiness} years of building trust, one project
              at a time.
            </h1>
            <p className="mt-6 text-espresso-soft/80 leading-relaxed">
              Martins Construction is a Los Angeles–based licensed general
              contractor and home builder offering kitchen remodeling,
              bathroom remodeling, room additions, and new construction. Our
              greatest assets are the craftsmanship, dedication, and
              experience our team brings to every project.
            </p>
            <p className="mt-4 text-espresso-soft/80 leading-relaxed">
              We&apos;ve learned that integrity, attention to detail, and
              honesty at every step make the best working environment for
              everyone. We get to know our customers on a first-name basis
              and treat every job like it&apos;s for family — listening to
              your wishes and needs so you end up with exactly what you
              envisioned.
            </p>
            <p className="mt-4 text-espresso-soft/80 leading-relaxed">
              No project is too big or too small. We handle every phase of
              home improvement and construction ourselves, for residential
              and commercial clients alike, across the greater Los Angeles
              area.
            </p>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="relative aspect-4/5 overflow-hidden rounded-2xl">
            <ParallaxImage
              src="/images/texture/craftsmanship.jpg"
              alt="Construction team collaborating on site"
              strength={0.1}
            />
          </Reveal>
        </div>
      </section>

      <TrustBar />

      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Award Winning Construction Company
            </p>
            <p className="mt-6 text-espresso-soft/80 leading-relaxed">
              Martins Construction is a leading general contractor in Los
              Angeles, CA. As a kitchen and bathroom remodeling company that
              finds practical solutions for stunning results in residential
              and commercial construction. Our company believes in making
              things that are built to last, so when you call us for
              renovations you can count on excellent workmanship and a
              flawless finish.
            </p>
            <p className="mt-4 text-espresso-soft/80 leading-relaxed">
              Our company works efficiently in order to finish the project on
              schedule and within budget. We bring a meticulous attention to
              detail to each job and maintain thorough, open communication
              with you throughout the process. As your dedicated contractors,
              we stay on top of each phase of construction to ensure that the
              highest professional standards are practiced.
            </p>
            <p className="mt-4 text-espresso-soft/80 leading-relaxed">
              We are experienced professionals who draw on years of expertise
              and the industry&apos;s latest resources to respond to
              customers&apos; demands. If you are looking for a company to
              trust your project with, call us for an estimate.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="relative aspect-4/5 overflow-hidden rounded-2xl lg:order-2">
            <ParallaxImage
              src="/images/texture/living-room.jpg"
              alt="Finished living space with natural light and warm materials"
              strength={0.1}
            />
          </Reveal>
          <div className="lg:order-1">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay">
                {approach.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl text-espresso">
                {approach.heading}
              </h2>
            </Reveal>
            <StaggerGroup className="mt-6 space-y-4">
              {approach.paragraphs.map((p) => (
                <StaggerItem key={p}>
                  <p className="text-espresso-soft/80 leading-relaxed">{p}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wide text-clay">
                  Our Values
                </p>
                <h2 className="mt-3 font-display text-3xl text-espresso">
                  What guides every job site.
                </h2>
              </Reveal>
              <StaggerGroup className="mt-8 space-y-6">
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <h3 className="font-display text-lg text-espresso">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso-soft/80">
                      {value.description}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <Reveal
              direction="right"
              className="relative aspect-4/5 overflow-hidden rounded-2xl lg:aspect-auto"
            >
              <ParallaxImage
                src="/images/texture/team-planning-outdoor.jpg"
                alt="Team reviewing project plans on site"
                strength={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <ImageBanner
        src="/images/texture/marble-detail.jpg"
        alt="Marble material detail"
        heading={company.tagline}
      />

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-wide text-clay">
                Credentials
              </p>
              <h2 className="mt-3 font-display text-2xl text-espresso">
                Licensed, insured, and accredited
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-espresso-soft/80">
                <li>Fully Licensed &amp; Insured — Lic. #{company.license}</li>
                <li>General liability &amp; workers&apos; compensation insurance</li>
                {accreditations.map((a) => (
                  <li key={a}>{a} member / accredited</li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-wide text-clay">
                Recognition
              </p>
              <h2 className="mt-3 font-display text-2xl text-espresso">
                Awards &amp; honors
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-espresso-soft/80">
                {awards.map((award) => (
                  <li key={award.name} className="flex justify-between gap-4 border-b border-line/70 pb-3">
                    <span>{award.name}</span>
                    <span className="shrink-0 text-stone">{award.years}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <PartnersSection />

      <CTASection />
    </>
  );
}
