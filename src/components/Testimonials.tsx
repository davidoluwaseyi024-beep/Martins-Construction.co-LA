import { TESTIMONIALS_ENABLED, testimonials } from "@/lib/content";

// Renders nothing until real, client-approved testimonials are added to
// src/lib/content.ts and TESTIMONIALS_ENABLED is set to true. Do not
// populate `testimonials` with invented or scraped quotes.
export default function Testimonials() {
  if (!TESTIMONIALS_ENABLED || testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          Client Stories
        </p>
        <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
          What clients say about working with us.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="rounded-2xl border border-line bg-paper p-7"
          >
            <p className="text-espresso-soft/90 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-espresso">
              — {t.author}
              {t.project ? `, ${t.project}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
