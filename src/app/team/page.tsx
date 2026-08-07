import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { company, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team | Martins Construction",
  description:
    "Meet the team behind Martins Construction, a licensed general contractor serving Los Angeles for 31 years.",
};

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-8 w-8 text-stone">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-clay">
              Meet the Team
            </p>
            <h1 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">
              {company.yearsInBusiness} years of building trust in Los Angeles.
            </h1>
            <p className="mt-5 max-w-xl text-espresso-soft/80">
              Every project runs through the same small, hands-on team, on a
              first-name basis with clients from the first call to the final
              walkthrough.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {team.map((member) =>
            member.placeholder ? (
              <StaggerItem
                key={member.id}
                className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-cream-soft p-8 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-paper">
                  <PersonIcon />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-clay">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-espresso-soft/70">
                  Bio and photo coming soon.
                </p>
              </StaggerItem>
            ) : (
              <StaggerItem
                key={member.id}
                className="rounded-2xl border border-line bg-paper p-8 text-center"
              >
                {member.photo && (
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name ?? member.role}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="mt-4 font-display text-lg text-espresso">{member.name}</h3>
                <p className="text-sm font-semibold text-clay">{member.role}</p>
                {member.bio && (
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft/80">
                    {member.bio}
                  </p>
                )}
              </StaggerItem>
            )
          )}
        </StaggerGroup>

        <Reveal delay={0.15} className="mt-14 border-t border-line pt-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay">
            Backed by
          </p>
          <TrustBadges variant="default" className="mt-4" />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
