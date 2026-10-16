import { allDates, eventsFor, SITE } from "../data/dates";
export function GET(){
  const lines=["# On This Day in Sports","> Curated notable sports moments for every calendar date (366 pages): year, sport, short factual description, and highlight links.","",`- Full fact list (plain, quotable): ${SITE}/facts`,`- Date pages: ${SITE}/{month}-{day} (e.g. ${SITE}/october-15)`,`- Sponsor: ${SITE}/sponsor`,`- Sitemap: ${SITE}/sitemap-index.xml`,"","## Facts"];
  for(const d of allDates) for(const e of eventsFor(d.key)) lines.push(`- ${d.label}, ${e.year} (${e.sport}): ${e.text}`);
  return new Response(lines.join("\n"),{headers:{"content-type":"text/plain; charset=utf-8"}});
}
