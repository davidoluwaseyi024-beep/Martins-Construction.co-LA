import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { company, serviceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Martins Construction",
  description:
    "Get a free in-home estimate from Martins Construction, a licensed Los Angeles general contractor.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-clay">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
          Let&apos;s talk about your project.
        </h1>
        <p className="mt-5 text-espresso-soft/80">
          Call us today to set up your free in-home estimate. No project is
          too big or too small.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-16 lg:grid-cols-2">
        <Reveal direction="left" className="rounded-2xl border border-line bg-paper p-8">
          <ContactForm />
        </Reveal>

        <Reveal direction="right" delay={0.1} className="space-y-10">
          <div>
            <h2 className="font-display text-xl text-espresso">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-espresso-soft/80">
              <li>
                <a href={company.phoneHref} className="font-medium text-clay hover:text-clay-dark">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-clay">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
              <li>Lic. #{company.license} — Fully Licensed &amp; Insured</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-espresso">Business Hours</h2>
            <ul className="mt-4 space-y-2 text-espresso-soft/80">
              {company.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-6 border-b border-line/70 pb-2 sm:max-w-xs">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-espresso">Service Area</h2>
            <p className="mt-4 text-espresso-soft/80">
              {serviceAreas.join(", ")}, and surrounding communities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
