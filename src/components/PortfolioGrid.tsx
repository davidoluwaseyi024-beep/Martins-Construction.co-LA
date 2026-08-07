"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ImageComparison from "@/components/ImageComparison";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { PortfolioProject, Service } from "@/lib/content";
import { company } from "@/lib/content";

export default function PortfolioGrid({
  projects,
  services,
}: {
  projects: PortfolioProject[];
  services: Service[];
}) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.serviceSlug === filter)),
    [projects, filter]
  );

  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-cream-soft px-6 py-16 text-center">
        <p className="font-display text-2xl text-espresso">
          Our project photos are being curated.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-espresso-soft/80">
          We&apos;re gathering real before-and-after photos from completed jobs for
          this gallery — we&apos;d rather wait and show you the real thing
          than fill this page with stock images. Check back soon, or call us
          and we&apos;ll walk you through recent work directly.
        </p>
        <a
          href={company.phoneHref}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-clay px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-clay-dark"
        >
          Call {company.phone}
        </a>
      </div>
    );
  }

  return (
    <div>
      <Reveal className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            filter === "all"
              ? "border-clay bg-clay text-paper"
              : "border-line text-espresso-soft hover:border-clay/40"
          }`}
        >
          All Projects
        </button>
        {services.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setFilter(s.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === s.slug
                ? "border-clay bg-clay text-paper"
                : "border-line text-espresso-soft hover:border-clay/40"
            }`}
          >
            {s.name}
          </button>
        ))}
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-10 lg:grid-cols-2" stagger={0.08}>
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <ImageComparison
              before={project.before}
              after={project.after}
              beforeAlt={`${project.title} — before`}
              afterAlt={`${project.title} — after`}
              aspectClassName="aspect-4/3"
            />
            <h3 className="mt-4 font-display text-xl text-espresso">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-clay">{project.service}</p>
            <p className="mt-2 text-sm leading-relaxed text-espresso-soft/80">
              <span className="font-semibold text-espresso">Challenge: </span>
              {project.challenge}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-espresso-soft/80">
              <span className="font-semibold text-espresso">Solution: </span>
              {project.solution}
            </p>
            <Link
              href={`/services#${project.serviceSlug}`}
              className="mt-3 inline-block text-sm font-semibold text-clay hover:text-clay-dark"
            >
              See this service →
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
