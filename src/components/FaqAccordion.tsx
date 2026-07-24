"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { StaggerItem } from "@/components/motion/Stagger";
import { faqs } from "@/lib/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <StaggerItem key={faq.question}>
            <div>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg text-espresso">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-espresso-soft transition-transform duration-300 ${
                    isOpen ? "rotate-45 border-clay/40 text-clay" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-14 leading-relaxed text-espresso-soft/80">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        );
      })}
    </div>
  );
}
