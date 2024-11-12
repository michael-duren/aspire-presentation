// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Building with .NET Aspire",
      social: {
        github: "https://github.com/michael-duren",
        linkedin: "https://www.linkedin.com/in/michael-duren/",
        blueSky: "https://bsky.app/profile/michaelduren.bsky.social",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Microservices",
              slug: "guides/microservices",
            },
            {
              label: "What is .NET Aspire",
              slug: "guides/what-is-dotnet-aspire",
            },
            {
              label: "Secrets & Azure Key Vault",
              slug: "guides/managing-secrets",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
