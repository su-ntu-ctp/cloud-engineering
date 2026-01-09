// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://su-ntu-ctp.github.io",
  base: "/cloud-engineering",

  integrations: [
    starlight({
      title: "Cloud Engineering",
      lastUpdated: true,

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/su-ntu-ctp/cloud-engineering",
        },
      ],

      sidebar: [
        {
          label: "Self Study",
          autogenerate: { directory: "self-study" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
