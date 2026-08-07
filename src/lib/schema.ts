// JSON-LD builders for local SEO. Pulls only from already-verified data in
// src/data/ — nothing here should assert a fact that isn't already backed
// by content.ts / the sourcing notes in src/data/credentials.json.

import { company, serviceAreas, services, trustSignals } from "@/lib/content";

export const SITE_URL = "https://martins-construction-co-la.vercel.app";

function findTrustValue(label: string): string | undefined {
  return trustSignals.find((t) => t.label === label)?.value;
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// "Monday – Saturday" -> ["Monday", "Tuesday", ..., "Saturday"]; a single
// day like "Sunday" -> ["Sunday"]. schema.org's dayOfWeek expects one of
// these exact day names (or an array of them), not a free-text range.
function expandDayRange(range: string): string[] {
  const parts = range.split("–").map((s) => s.trim());
  if (parts.length === 1) return parts;
  const start = DAY_NAMES.indexOf(parts[0]);
  const end = DAY_NAMES.indexOf(parts[1]);
  if (start === -1 || end === -1) return parts;
  const result: string[] = [];
  for (let i = start; ; i = (i + 1) % 7) {
    result.push(DAY_NAMES[i]);
    if (i === end) break;
  }
  return result;
}

// "8:00 AM" -> "08:00", "7:00 PM" -> "19:00". schema.org's opens/closes
// expect 24-hour time, not the site copy's 12-hour display format.
function to24Hour(time: string): string {
  const m = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return time;
  const [, hh, mm, ampm] = m;
  let h = parseInt(hh, 10);
  if (ampm.toUpperCase() === "PM" && h !== 12) h += 12;
  if (ampm.toUpperCase() === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${mm}`;
}

export function buildLocalBusinessSchema() {
  const googleRating = findTrustValue("Google Rating"); // "4.9 out of 5 (27 reviews)"
  const ratingMatch = googleRating?.match(/^([\d.]+) out of 5 \((\d+) reviews?\)/);

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#business`,
    name: company.name,
    description:
      "Licensed general contractor serving the greater Los Angeles area, offering kitchen and bathroom remodeling, room additions, ADUs, and custom home building.",
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "11611 San Vicente Blvd",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90049",
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
    priceRange: "$$",
    // Closed days are simply omitted — that's the standard convention for
    // openingHoursSpecification, rather than emitting an entry with no
    // opens/closes.
    openingHoursSpecification: company.hours
      .filter((h) => h.time !== "Closed")
      .map((h) => {
        const [opens, closes] = h.time.split("–").map((t) => t.trim());
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: expandDayRange(h.days),
          opens: to24Hour(opens),
          closes: to24Hour(closes),
        };
      }),
    ...(ratingMatch
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: ratingMatch[1],
            reviewCount: ratingMatch[2],
          },
        }
      : {}),
    sameAs: Object.values(company.social),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: `California Contractors State License Board (CSLB) License #${company.license}`,
      },
    ],
  };
}

export function buildServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services#${s.slug}`,
        name: s.name,
        description: s.short,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Los Angeles" },
      },
    })),
  };
}
