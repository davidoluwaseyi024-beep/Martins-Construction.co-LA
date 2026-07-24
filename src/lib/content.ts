// Verified company facts only. Do not add unverified claims here —
// see conversation history / client-provided content for sourcing.

export const company = {
  name: "Martins Construction",
  phone: "(818) 518-6002",
  phoneHref: "tel:+18185186002",
  email: "MartinsConstruction@yahoo.com",
  address: "11611 San Vicente Blvd, Los Angeles, CA 90049",
  license: "873368",
  yearsInBusiness: 31,
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  tagline: "Listen better. Plan better. Build better.",
  social: {
    facebook: "https://www.facebook.com/MartinsConstructionCorp/",
    yelp: "https://www.yelp.com/biz/martins-construction-los-angeles-13",
    linkedin: "https://www.linkedin.com/in/martinsconstruction",
    youtube: "https://www.youtube.com/channel/UCjLE3jCjbQ_8-_yS7gUncZQ",
  },
} as const;

// Structured for animated counters (StatBar). Keep numbers in sync with
// trustSignals below if either changes.
export const stats = [
  { to: company.yearsInBusiness, suffix: "+", decimals: 0, label: "Years in Business" },
  { to: 4.9, suffix: "", decimals: 1, label: "Google Rating" },
  { to: 27, suffix: "", decimals: 0, label: "Client Reviews" },
  { to: 1, prefix: "Top ", suffix: "%", decimals: 0, label: "BuildZoom Score, CA" },
] as const;

export const trustSignals = [
  { label: "Licensed & Insured", value: `Lic. #${company.license}` },
  { label: "Google Rating", value: "4.9 out of 5 (27 reviews)" },
  { label: "BBB Accredited", value: "Since 2008" },
  { label: "BuildZoom Score", value: "Top 1% of CA contractors" },
] as const;

export const accreditations = ["BBB", "NARI"] as const;

export const awards = [
  { name: "National Fine Builders Association", years: "2006, 2008, 2017" },
  { name: "The Master Design Awards", years: "2009" },
  { name: "Qualified Remodeler Magazine Top 500", years: "2011, 2016, 2018" },
  { name: "Angie's List Super Service Award", years: "2011, 2013, 2017" },
  { name: "Kudzu Best Of", years: "2012, 2015" },
  { name: "Best of Houzz", years: "2016, 2019" },
] as const;

export const services = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    short: "Custom kitchens built around how you actually live and cook.",
    description:
      "The kitchen is the room that brings everyone together, so we treat it that way, designing around your layout, cabinetry, countertops, flooring, fixtures, and appliances until the space fits your taste and your routine, not a showroom template. We work in a range of styles, from Old World kitchens with distressed cabinets to clean, contemporary rooms with minimal ornamentation, and we build every one to hold up to real daily use.",
    highlights: [
      "Old World kitchens with distressed cabinetry",
      "Tuscan designs in natural, earth tone materials",
      "French Country styling with decorative shelving",
      "Clean, contemporary kitchens with minimal ornamentation",
    ],
    image: "/images/services/kitchen-remodeling.jpg",
    homeImage: "/images/home/kitchen-remodeling.jpg",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    short: "Bathrooms reimagined as a private place to unwind.",
    description:
      "A bathroom remodel is one of the fastest ways to change how a home feels day to day, and one of the first things buyers notice if you ever sell. We handle every fixture and finish ourselves: tile and flooring, vanities, lighting, shower and tub doors, sinks and toilets, all tailored to your budget and how you want the space to feel, from a quick refresh to a full private retreat.",
    highlights: [
      "Glass enclosed walk in showers",
      "Vessel sinks with stainless faucets",
      "Oversized soaking tubs",
      "Custom storage built into the design",
    ],
    image: "/images/services/bathroom-remodeling.jpg",
    homeImage: "/images/home/bathroom-remodeling.jpg",
  },
  {
    slug: "kitchen-bathroom-remodel",
    name: "Kitchen & Bath Remodels",
    short: "Combined kitchen and bathroom projects, coordinated from one team.",
    description:
      "When you're renovating both spaces at once, splitting the work across separate contractors usually means separate schedules, separate budgets, and gaps where nobody's quite in charge. We run combined kitchen and bath projects as one job from day one, with a single team keeping design, sequencing, and budget aligned so the two spaces come together on the same timeline, not two staggered ones.",
    highlights: [
      "One team, one schedule, one budget",
      "Design coordinated across both spaces",
      "Fewer disruptions to daily life during construction",
    ],
    image: "/images/services/kitchen-bath-combo.jpg",
    homeImage: "/images/home/kitchen-bath-combo.jpg",
  },
  {
    slug: "room-addition",
    name: "Room Additions & Extensions",
    short: "More space, built to match your home's original architecture.",
    description:
      "Adding on is often the more practical move over relocating. You keep the neighborhood, the school district, the yard you've already put work into, and gain the room you actually need. We build family rooms, home offices, guest suites, and second-story additions to flow seamlessly with your home's existing architecture, so the finished addition reads as part of the original structure, not an obvious add on.",
    highlights: [
      "Family rooms and home offices",
      "Guest bedrooms and suites",
      "Second story additions",
      "Seamless architectural matching, inside and out",
    ],
    image: "/images/services/room-addition.jpg",
    homeImage: "/images/home/room-addition.jpg",
  },
  {
    slug: "adu",
    name: "ADU & Garage Conversion",
    short: "An unused garage, turned into square footage that earns its keep.",
    description:
      "That garage is doing less for you every year it sits half used for storage. Converted the right way, it becomes a rental unit, a space for family, a home office, or simply room to grow, without the cost or disruption of building an addition from the ground up. We handle it start to finish, from design and permitting through the last coat of paint, working stud by stud so the finished space matches the quality and character of your primary home, not a converted afterthought.",
    highlights: [
      "Detached and attached ADU construction",
      "Garage to ADU conversions",
      "Permitting and plan check coordination",
      "Design that matches your primary residence",
    ],
    image: "/images/services/adu-exterior.jpg",
    homeImage: "/images/home/adu-garage-conversion.jpg",
  },
  {
    slug: "custom-home-building",
    name: "Custom Home Building",
    short: "New construction, residential and commercial.",
    description:
      "Full scope new construction for homeowners and commercial clients who want more than a general contractor pulling permits. They want a building process defined by craftsmanship and clear communication at every phase, from foundation to final walkthrough. We take on both residential and commercial ground-up projects across the greater Los Angeles area.",
    highlights: [
      "Ground up residential construction",
      "Commercial construction projects",
      "General contracting, foundation to finish",
    ],
    image: "/images/services/custom-home-building.jpg",
    homeImage: "/images/home/custom-home-building.jpg",
  },
] as const;

export const serviceAreas = [
  "Los Angeles",
  "Encino",
  "Sherman Oaks",
  "Tarzana",
  "Woodland Hills",
  "Studio City",
  "Northridge",
  "Pasadena",
  "South Pasadena",
  "Hollywood",
  "West Hollywood",
  "Santa Monica",
  "Culver City",
  "Burbank",
  "Glendale",
  "Beverly Hills",
  "Pacific Palisades",
  "Malibu",
  "Marina Del Rey",
  "Playa Del Rey",
  "Venice Beach",
  "Calabasas",
] as const;

export const approach = {
  eyebrow: "Our Approach",
  heading: "The finished space is the result. The relationship is the process.",
  paragraphs: [
    "Every project runs on the same principle regardless of size: we get to know our clients on a first name basis and treat the job like it's for family. That means listening to what you actually want before a single material is chosen, then staying in close, honest contact as the work moves from demo to finish.",
    "It also means the boring parts get taken seriously: permits, sequencing, protecting the rest of your home while we work, so the only thing you have to think about is the outcome, not the logistics.",
  ],
} as const;

export const process = [
  {
    step: "01",
    title: "Call & Consultation",
    description:
      "Call for a free in home estimate. We listen first: to your wishes, your needs, and how you actually use the space.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "We work through layout, materials, and budget together, so there are no surprises once work begins.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Meticulous attention to detail at every phase, with open, honest communication on progress the whole way through.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We finish on schedule and within budget, then walk the finished space with you to confirm it matches what you envisioned.",
  },
] as const;

export const values = [
  {
    title: "Listen First",
    description:
      "We listen to your wishes and needs from the first conversation, so the finished project matches what you actually envisioned.",
  },
  {
    title: "Open Communication",
    description:
      "You're kept aware of progress at every phase, and the process stays open and honest from estimate to final walkthrough.",
  },
  {
    title: "Meticulous Detail",
    description:
      "Meticulous attention to detail on every job, with the highest professional standards practiced at each phase of construction.",
  },
  {
    title: "On Schedule, On Budget",
    description:
      "We work efficiently so your project finishes on schedule and within budget, without cutting corners on craftsmanship.",
  },
] as const;

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What areas do you serve?",
    answer: `We serve the greater Los Angeles area, including ${serviceAreas.join(", ")}, and surrounding communities.`,
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. Martins Construction is a fully licensed and insured general contractor (Lic. #${company.license}), carrying general liability and workers' compensation insurance on every job.`,
  },
  {
    question: "How do I get a project estimate?",
    answer: `Call us at ${company.phone} for a free in home estimate. We'll walk the space with you, listen to what you're looking for, and talk through scope before any work begins.`,
  },
  {
    question: "What services do you offer?",
    answer: `${services.map((s) => s.name).join(", ")}, from single room remodels to full custom home builds, for residential and commercial clients.`,
  },
  {
    question: "How long has Martins Construction been in business?",
    answer: `We've been building and remodeling homes and commercial spaces across Los Angeles for ${company.yearsInBusiness}+ years.`,
  },
  {
    question: "Do you work on commercial projects, or just residential?",
    answer:
      "Both. Alongside residential remodeling and additions, we take on ground up commercial construction across the greater Los Angeles area.",
  },
  {
    question: "What does the process look like once I hire you?",
    answer:
      "It runs in four stages: a call and in home consultation, design and planning where we work out layout, materials, and budget together, construction with open communication throughout, and a final walkthrough to confirm the finished space matches what you envisioned.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A bathroom refresh moves much faster than a room addition or ground up build. We'll walk through a realistic schedule for your specific project during the initial consultation, and keep you updated at every phase once work begins.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "We work with financing partners including Ygrene, Renew Financial (California FIRST), and the HERO Program for PACE financing on energy efficient home improvements. Ask us during your consultation about options that may fit your project.",
  },
  {
    question: "What are your business hours?",
    answer: company.hours.map((h) => `${h.days}: ${h.time}`).join(". ") + ".",
  },
];

// Testimonials: intentionally empty. Do not populate with invented or
// scraped/paraphrased quotes. Real client-approved testimonials go here
// as { quote, author, project? } once provided, and TESTIMONIALS_ENABLED
// flips to true.
export const TESTIMONIALS_ENABLED = false;
export const testimonials: { quote: string; author: string; project?: string }[] = [];

// Partners & Certifications.
// Every entry below has a real logo sourced from the organization's own
// official site or official brand/press-kit page — files live in
// /public/images/partners. Organizations whose logo couldn't be sourced
// (blocked, account-gated, or issued as a business-specific badge) were
// left out rather than shown with a placeholder.
export const partners: {
  name: string;
  url: string;
  logo: string;
  note?: string;
  // Set when the sourced logo file is a "for dark backgrounds" variant
  // (light/white wordmark) that needs a dark backdrop chip to stay legible,
  // rather than sitting directly on the card's light background.
  onDark?: boolean;
}[] = [
  {
    name: "Habitat for Humanity – Greater Los Angeles",
    url: "https://www.habitatla.org/",
    logo: "/images/partners/habitat-for-humanity-logo.svg",
    note: "habitatla.org itself is still behind Cloudflare bot protection, so this is Habitat for Humanity International's public-domain logo (Wikimedia Commons, sourced from habitat.org's own multimedia assets) rather than the Greater LA affiliate's own mark. Local affiliates generally use the national branding as-is, but swap in an LA-specific lockup if the client has one.",
  },
  {
    name: "Build It Green",
    url: "https://www.builditgreen.org/",
    logo: "/images/partners/build-it-green-logo.svg",
    onDark: true,
    note: "Sourced file is Build It Green's official \"dark backgrounds\" variant (near-white wordmark) — rendered on a dark chip so it stays legible. Their site started rate-limiting automated requests before a light-background variant could be located; swap in the light variant from builditgreen.org if you'd prefer it to match the other tiles exactly.",
  },
  {
    name: "The Franklin Report",
    url: "https://www.franklinreport.com/",
    logo: "/images/partners/franklin-report-logo.png",
  },
  {
    name: "Business Consumer Alliance",
    url: "https://www.checkbca.org/",
    logo: "/images/partners/business-consumer-alliance-logo.png",
  },
  {
    name: "Houzz",
    url: "https://www.houzz.com/",
    logo: "/images/partners/houzz-logo.svg",
  },
  {
    name: "Ygrene",
    url: "https://ygrene.com/",
    logo: "/images/partners/ygrene-logo.png",
  },
  {
    name: "California FIRST",
    url: "https://californiafirst.org/",
    logo: "/images/partners/renew-financial-logo.jpg",
    note: "californiafirst.org now redirects to Renew Financial (renewfinancial.com/product/californiafirst), and renewfinancial.com itself blocks automated fetches — so this is Renew Financial's official logo pulled from one of their own PR Newswire press-release attachments instead. Worth confirming with the client whether this PACE program relationship is still current under Renew Financial's branding.",
  },
  {
    name: "Efficiency First California",
    url: "https://efficiencyfirstca.org/",
    logo: "/images/partners/efficiency-first-california-logo.png",
    note: "Formerly \"California Building Performance Contractors Association (CBPCA)\" — CBPCA renamed to Efficiency First California in 2012. Using the current org name/logo per client direction.",
  },
  {
    name: "HERO Program",
    url: "https://www.heroprogram.com/",
    logo: "/images/partners/hero-program-logo.jpg",
    note: "Logo pulled from Renovate America's own PR Newswire press-release attachments (heroprogram.com and renovateamerica.com both block automated fetches). Still couldn't confirm current operational status as of 2026 — Renovate America went through bankruptcy proceedings in 2020. Confirm this program is still active under this name before relying on the logo/link for anything client-facing.",
  },
];
