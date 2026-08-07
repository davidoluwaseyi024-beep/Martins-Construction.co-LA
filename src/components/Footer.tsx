import Link from "next/link";
import Logo from "@/components/Logo";
import TrustBadges from "@/components/TrustBadges";
import { company, serviceAreas, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-espresso text-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" aria-label="Martins Construction, home" className="inline-block">
              <Logo iconHeight={56} wordmarkClassName="text-paper" accentClassName="text-gold-soft" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-soft/80">
              {company.tagline} Licensed general contractor serving the greater
              Los Angeles area for {company.yearsInBusiness} years.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-cream-soft/50">
              Lic. #{company.license} · Fully Licensed &amp; Insured
            </p>
            <TrustBadges variant="footer" className="mt-5" />
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-soft/80">
              {services.map((s) => (
                <li key={s.slug}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-soft/80">
              <li>
                <a href={company.phoneHref} className="hover:text-gold-soft">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-gold-soft break-all">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
            <div className="mt-4 flex gap-4 text-xs text-cream-soft/60">
              <a href={company.social.facebook} className="hover:text-gold-soft">Facebook</a>
              <a href={company.social.yelp} className="hover:text-gold-soft">Yelp</a>
              <a href={company.social.linkedin} className="hover:text-gold-soft">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-soft/10 pt-6">
          <p className="text-xs text-cream-soft/50">
            Proudly serving {serviceAreas.slice(0, 6).join(", ")}, and surrounding Los Angeles
            communities.
          </p>
          <p className="mt-4 text-xs text-cream-soft/40">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
