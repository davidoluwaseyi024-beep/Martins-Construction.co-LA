"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "@/components/Logo";
import { company } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const overlayHero = pathname === "/" && !scrolled;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 64);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        overlayHero
          ? "border-transparent bg-transparent"
          : "border-line/70 bg-cream/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" aria-label="Martins Construction, home" className="shrink-0">
          <Logo
            iconHeight={32}
            wordmarkSize="text-xs"
            wordmarkClassName={`transition-colors duration-500 ${
              overlayHero ? "text-paper" : "text-espresso"
            }`}
            accentClassName={overlayHero ? "text-gold-soft" : "text-clay"}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-clay ${
                overlayHero ? "text-cream-soft" : "text-espresso-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={company.phoneHref}
            className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-clay-dark"
          >
            {company.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 md:hidden ${
            overlayHero ? "border-cream-soft/40 text-paper" : "border-line text-espresso"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-cream md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-espresso-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="rounded-full bg-clay px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                Call {company.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
