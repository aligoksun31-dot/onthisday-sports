import { SITE } from "../data/dates";
export const GET=()=>new Response(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap-index.xml\n`);
