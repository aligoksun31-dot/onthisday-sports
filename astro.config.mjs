import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({ site: "https://onthisday-sports.vercel.app", output: "static", integrations: [sitemap()] });
