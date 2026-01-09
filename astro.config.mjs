// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
          label: "Guides",
          items: [{ label: "Example Guide", slug: "guides/example" }],
        },
        {
          label: "Self Study Materials",
          autogenerate: { directory: "self-study-materials" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
