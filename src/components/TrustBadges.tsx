import { credentials } from "@/lib/content";

/**
 * Clickable credential badges (CSLB license, BBB accreditation, NARI
 * membership) that link out to each org's real public verification page.
 * See src/data/credentials.json for sourcing notes on every link/claim.
 */
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 2.5l7.5 3v5.2c0 4.86-3.2 8.98-7.5 10.3-4.3-1.32-7.5-5.44-7.5-10.3V5.5l7.5-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.75 12.2l2.25 2.25 4.25-4.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TrustBadges({
  variant = "default",
  className,
}: {
  /**
   * "default": light card row, for the Why Choose Us section.
   * "footer": minimal row styled for the dark footer background.
   * "compact": small pill row for overlaying a hero/photo section.
   */
  variant?: "default" | "footer" | "compact";
  className?: string;
}) {
  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap gap-x-6 gap-y-3 ${className ?? ""}`}>
        {credentials.map((c) => (
          <a
            key={c.id}
            href={c.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={c.detail}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cream-soft/70 transition-colors hover:text-gold-soft"
          >
            <ShieldCheckIcon className="h-4 w-4 shrink-0" />
            {c.label}
          </a>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
        {credentials.map((c) => (
          <a
            key={c.id}
            href={c.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${c.label} — ${c.verifyLabel}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-cream-soft/30 bg-espresso/30 px-3 py-1.5 text-xs font-medium text-cream-soft backdrop-blur-sm transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <ShieldCheckIcon className="h-3.5 w-3.5 shrink-0" />
            {c.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 sm:grid-cols-3 ${className ?? ""}`}>
      {credentials.map((c) => (
        <a
          key={c.id}
          href={c.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 rounded-2xl border border-line/60 bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-lg hover:shadow-espresso/5"
        >
          <ShieldCheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-clay" />
          <span>
            <span className="block text-sm font-semibold text-espresso">{c.label}</span>
            <span className="mt-0.5 block text-xs text-espresso-soft/70">{c.detail}</span>
            <span className="mt-1.5 block text-xs font-medium text-clay group-hover:text-clay-dark">
              {c.verifyLabel} ↗
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
