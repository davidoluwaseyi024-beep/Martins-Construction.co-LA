"use client";

import Link from "next/link";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TrustBadges from "@/components/TrustBadges";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { company } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative isolate -mt-18 flex min-h-[92vh] items-end overflow-hidden">
      <ParallaxImage
        src="/images/hero/hero-exterior.jpg"
        alt="Modern residential exterior renovation in Los Angeles"
        priority
        strength={0.18}
      />
      <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/60 to-espresso/10" />
      <div className="absolute inset-0 bg-espresso/25 lg:hidden" />

      <StaggerGroup
        className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40 lg:px-8"
        delay={0.15}
      >
        <StaggerItem>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Los Angeles General Contractor · {company.yearsInBusiness} Years in
            Business
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-paper drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl lg:drop-shadow-none">
            {company.tagline}
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-xl text-lg text-cream-soft/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] lg:text-cream-soft/90 lg:drop-shadow-none">
            For {company.yearsInBusiness} years, Martins Construction has
            brought meticulous craftsmanship and honest communication to
            kitchen and bathroom remodels, additions, and custom builds
            across Los Angeles.
          </p>
        </StaggerItem>
        <StaggerItem className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={company.phoneHref}
            className="rounded-full bg-clay px-8 py-3.5 text-center text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg hover:shadow-clay/30"
          >
            Get a Free Estimate
          </a>
          <Link
            href="/services"
            className="rounded-full border border-cream-soft/40 px-8 py-3.5 text-center text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-soft hover:text-gold-soft"
          >
            View Our Services
          </Link>
        </StaggerItem>
        <StaggerItem>
          <TrustBadges variant="compact" className="mt-8" />
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
