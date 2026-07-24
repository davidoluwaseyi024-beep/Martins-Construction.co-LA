"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Estimate request from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );

    window.location.href = `mailto:${company.email}?reply-to=${encodeURIComponent(email)}&subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-espresso">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-espresso outline-none focus:border-clay"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-espresso">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-espresso outline-none focus:border-clay"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-espresso">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-espresso outline-none focus:border-clay"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-espresso">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-espresso outline-none focus:border-clay"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg hover:shadow-clay/30"
      >
        Request a Free Estimate
      </button>
      {sent && (
        <p className="text-sm text-espresso-soft/70">
          Opening your email client to send this to us — if nothing opened,
          email {company.email} directly.
        </p>
      )}
    </form>
  );
}
