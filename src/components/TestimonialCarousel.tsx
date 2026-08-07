"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS_ENABLED, testimonials } from "@/lib/content";

// Renders nothing until real, client-approved testimonials are added to
// src/data/testimonials.json and TESTIMONIALS_ENABLED is set to true. Do
// not populate `testimonials` with invented or scraped quotes.
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, count, next]);

  if (!TESTIMONIALS_ENABLED || count === 0) return null;

  const current = testimonials[index];

  return (
    <section className="bg-espresso py-24 text-cream-soft">
      <div
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">
          Client Stories
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          What it&apos;s like to work with us.
        </h2>

        <div className="relative mt-10 min-h-[11rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-xl leading-relaxed text-paper sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-5 text-sm font-medium text-cream-soft/80">
                {current.author}
                {current.project ? `, ${current.project}` : ""}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-soft/30 text-cream-soft transition-colors hover:border-gold-soft hover:text-gold-soft"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    i === index ? "bg-gold-soft" : "bg-cream-soft/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-soft/30 text-cream-soft transition-colors hover:border-gold-soft hover:text-gold-soft"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
