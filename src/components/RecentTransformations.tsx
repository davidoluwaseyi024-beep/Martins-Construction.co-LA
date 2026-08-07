import Link from "next/link";
import ImageComparison from "@/components/ImageComparison";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { portfolio } from "@/lib/content";

// Renders nothing until real before/after project photos exist in
// src/data/portfolio.json — same honest-empty-state rule as Testimonials.
export default function RecentTransformations() {
  if (portfolio.length === 0) return null;

  const recent = portfolio.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Recent Transformations
          </p>
          <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
            Drag to see the before and after.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay transition-colors hover:text-clay-dark"
          >
            View full portfolio →
          </Link>
        </Reveal>
      </div>

      <StaggerGroup className="mt-10 grid gap-8 lg:grid-cols-3" stagger={0.1}>
        {recent.map((project) => (
          <StaggerItem key={project.slug}>
            <ImageComparison
              before={project.before}
              after={project.after}
              beforeAlt={`${project.title} — before`}
              afterAlt={`${project.title} — after`}
              aspectClassName="aspect-4/3"
            />
            <h3 className="mt-3 font-display text-lg text-espresso">{project.title}</h3>
            <p className="mt-1 text-sm text-clay">{project.service}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
