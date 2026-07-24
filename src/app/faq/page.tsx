import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/Stagger";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Martins Construction",
  description:
    "Answers to common questions about Martins Construction's services, service area, licensing, process, and financing.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            FAQ
          </p>
          <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mt-5 text-espresso-soft/80">
            Can&apos;t find what you&apos;re looking for? Call us directly
            and we&apos;ll walk you through it.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12">
          <FaqAccordion />
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
