// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Building with .NET Aspire",
      customCss: ["./src/css/styles.css"],
      social: {
        github: "https://github.com/michael-duren",
        linkedin: "https://www.linkedin.com/in/michael-duren/",
        blueSky: "https://bsky.app/profile/michaelduren.bsky.social",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "About Me",
              slug: "intro/about-me",
            },
            {
              label: "What's Covered",
              slug: "intro/covering",
            },
            {
              label: "Microservices",
              slug: "intro/microservices",
            },
            {
              label: "What is .NET Aspire",
              slug: "intro/what-is-dotnet-aspire",
            },
          ],
        },
        {
          label: "Building",
          items: [
            {
              label: "Secrets & Azure Key Vault",
              slug: "building/managing-secrets",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind(),
  ],
});
