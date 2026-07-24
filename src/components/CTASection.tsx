import Reveal from "@/components/motion/Reveal";
import { company } from "@/lib/content";

export default function CTASection() {
  return (
    <section className="bg-espresso">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl text-paper sm:text-4xl">
            Ready to talk through your project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-soft/80">
            Call for a free in-home estimate — we&apos;ll listen to what you
            need before we talk about how to build it.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={company.phoneHref}
            className="rounded-full bg-clay px-8 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg hover:shadow-clay/30"
          >
            Call {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="rounded-full border border-cream-soft/30 px-8 py-3.5 text-sm font-semibold text-cream-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-soft hover:text-gold-soft"
          >
            Email Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
