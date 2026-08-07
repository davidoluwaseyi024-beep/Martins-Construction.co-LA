// Thin typed re-export layer over src/data/*.json.
//
// Content now lives in src/data/ as plain JSON so it can be swapped for a
// headless CMS (Sanity, Contentful, etc.) later without touching every
// component that imports from "@/lib/content" — only this file's fetch
// logic would need to change.
//
// Verified company facts only. Do not add unverified claims to src/data —
// see conversation history / client-provided content for sourcing, and the
// "note" fields already in credentials.json, partners.json, and team.json
// for what has and hasn't been confirmed.

import companyData from "@/data/company.json";
import trustSignalsData from "@/data/trustSignals.json";
import credentialsData from "@/data/credentials.json";
import accreditationsData from "@/data/accreditations.json";
import awardsData from "@/data/awards.json";
import servicesData from "@/data/services.json";
import serviceAreasData from "@/data/serviceAreas.json";
import approachData from "@/data/approach.json";
import processData from "@/data/process.json";
import valuesData from "@/data/values.json";
import faqsData from "@/data/faqs.json";
import testimonialsData from "@/data/testimonials.json";
import partnersData from "@/data/partners.json";
import portfolioData from "@/data/portfolio.json";
import teamData from "@/data/team.json";

export const company = companyData;

// Structured for animated counters (StatBar). Keep numbers in sync with
// trustSignals below if either changes.
export const stats = [
  { to: company.yearsInBusiness, suffix: "+", decimals: 0, label: "Years in Business" },
  { to: 4.9, suffix: "", decimals: 1, label: "Google Rating" },
  { to: 27, suffix: "", decimals: 0, label: "Client Reviews" },
  { to: 1, prefix: "Top ", suffix: "%", decimals: 0, label: "BuildZoom Score, CA" },
] as const;

export const trustSignals = trustSignalsData;

export type Credential = {
  id: string;
  label: string;
  detail: string;
  verifyUrl: string;
  verifyLabel: string;
  note?: string;
};
export const credentials: Credential[] = credentialsData;

export const accreditations = accreditationsData;
export const awards = awardsData;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  highlights: string[];
  image: string;
  homeImage: string;
};
export const services: Service[] = servicesData;

export const serviceAreas = serviceAreasData;
export const approach = approachData;
export const process = processData;
export const values = valuesData;
export const faqs: { question: string; answer: string }[] = faqsData;

// Testimonials: intentionally empty. Do not populate with invented or
// scraped/paraphrased quotes. Real client-approved testimonials go into
// src/data/testimonials.json as { quote, author, project? } once provided,
// and TESTIMONIALS_ENABLED flips to true.
export const TESTIMONIALS_ENABLED = false;
export type Testimonial = { quote: string; author: string; project?: string };
export const testimonials: Testimonial[] = testimonialsData;

// Partners & Certifications.
// Every entry below has a real logo sourced from the organization's own
// official site or official brand/press-kit page — files live in
// /public/images/partners. Organizations whose logo couldn't be sourced
// (blocked, account-gated, or issued as a business-specific badge) were
// left out rather than shown with a placeholder. See src/data/partners.json
// for per-entry sourcing notes.
export type Partner = {
  name: string;
  url: string;
  logo: string;
  note?: string;
  // Set when the sourced logo file is a "for dark backgrounds" variant
  // (light/white wordmark) that needs a dark backdrop chip to stay legible,
  // rather than sitting directly on the card's light background.
  onDark?: boolean;
};
export const partners: Partner[] = partnersData;

// Portfolio: intentionally empty, same rule as testimonials. Do not
// populate with stock photos or placeholder imagery presented as real
// project work. Real before/after project photos go into
// src/data/portfolio.json once provided.
export type PortfolioProject = {
  slug: string;
  title: string;
  service: string;
  serviceSlug: string;
  challenge: string;
  solution: string;
  before: string;
  after: string;
};
export const portfolio: PortfolioProject[] = portfolioData;

// Team: placeholder entries only until real, client-provided bios/photos
// exist. See src/data/team.json's "note" field per entry.
export type TeamMember = {
  id: string;
  role: string;
  name: string | null;
  photo: string | null;
  bio: string | null;
  placeholder: boolean;
  note?: string;
};
export const team: TeamMember[] = teamData;
