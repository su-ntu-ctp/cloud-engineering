// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://su-ntu-ctp.github.io",
  base: "/cloud-engineering",
  redirects: {
    "/": "/self-study/101/",
  },
  integrations: [
    starlight({
      title: "Cloud Engineering",
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
      ],
    }),
  ],
});
