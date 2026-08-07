import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/motion/Reveal";
import { portfolio, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio | Martins Construction",
  description:
    "Before and after kitchen, bathroom, ADU, and room addition projects from Martins Construction, a licensed Los Angeles general contractor.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Portfolio
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl text-espresso sm:text-5xl">
              Real transformations, room by room.
            </h1>
            <p className="mt-5 max-w-xl text-espresso-soft/80">
              Drag the slider on each project to see the before and after.
              Filter by service to find work like the project you have in mind.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <PortfolioGrid projects={portfolio} services={services} />
      </section>

      <CTASection />
    </>
  );
}
