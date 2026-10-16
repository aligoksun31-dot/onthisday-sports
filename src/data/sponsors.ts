// Sponsorship config. Paste Stripe Payment Links into buyUrl to enable the Buy buttons.
export interface Package { id: string; name: string; price: string; term: string; perks: string[]; buyUrl: string; }
export const packages: Package[] = [
  { id: "date", name: "Date Page Sponsor", price: "$49", term: "one date, for a full year", buyUrl: "",
    perks: ["Your logo + link on one date page (e.g. /october-15)", "Great for birthdays, anniversaries, and team milestones", "Live for 12 months"] },
  { id: "weekly", name: "Weekly Featured Sponsor", price: "$199", term: "one week", buyUrl: "",
    perks: ["Logo in the sitewide sponsor ticker on every page", "Top banner placement", "Featured in the daily newsletter all week"] },
  { id: "monthly", name: "Monthly Presenting Sponsor", price: "$599", term: "one month", buyUrl: "",
    perks: ["Everything in Weekly, for a full month", "'Presented by' credit on the homepage", "Top billing in the newsletter"] },
];
// Active sponsors render automatically. Dates are YYYY-MM-DD (inclusive). Site must be rebuilt/redeployed for changes.
export interface Sponsor { name: string; url: string; logo?: string; tier: "date" | "weekly" | "monthly"; start: string; end: string; dateSlug?: string; }
export const sponsors: Sponsor[] = [
  // { name: "Acme Sports", url: "https://acme.com", logo: "/sponsors/acme.png", tier: "weekly", start: "2026-10-19", end: "2026-10-25" },
  // { name: "Happy 40th, Dad!", url: "https://example.com", tier: "date", dateSlug: "october-15", start: "2026-10-15", end: "2027-10-14" },
];
const today = () => new Date().toISOString().slice(0, 10);
export const active = (tiers?: Sponsor["tier"][]) => sponsors.filter(s => s.start <= today() && today() <= s.end && (!tiers || tiers.includes(s.tier)));
export const dateSponsors = (slug: string) => active(["date"]).filter(s => s.dateSlug === slug);
export const presenting = () => active(["monthly"])[0];
