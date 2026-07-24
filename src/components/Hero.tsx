"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxImage from "@/components/motion/ParallaxImage";
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
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
            {company.tagline}
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mt-6 max-w-xl text-lg text-cream-soft/90">
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
      </StaggerGroup>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="h-9 w-5.5 rounded-full border border-cream-soft/50"
          style={{ width: 22, height: 36 }}
        >
          <motion.div
            className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-cream-soft"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
