"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { process } from "@/lib/content";

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          How It Works
        </p>
        <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
          From first call to final walkthrough.
        </h2>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={ref} className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]" />
          <motion.div
            className="absolute left-[15px] top-2 w-px origin-top bg-clay sm:left-[19px]"
            style={{ scaleY, bottom: "0.5rem" }}
          />

          <ol className="space-y-14">
            {process.map((item) => (
              <li key={item.step} className="relative pl-12 sm:pl-16">
                <Reveal direction="left" className="absolute left-0 top-0">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-clay bg-cream font-display text-xs text-clay sm:h-10 sm:w-10 sm:text-sm">
                    {item.step}
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="font-display text-xl text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-espresso-soft/80">
                    {item.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal
          direction="right"
          delay={0.1}
          className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl lg:block lg:sticky lg:top-28 lg:self-start"
        >
          <ParallaxImage
            src="/images/texture/planning.jpg"
            alt="Detailed project planning and design process"
            strength={0.1}
          />
        </Reveal>
      </div>
    </section>
  );
}
