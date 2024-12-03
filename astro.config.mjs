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
          label: "Getting Started",
          items: [
            {
              label: "Setting up a aspire project",
              slug: "getting-started/setting-up-a-project",
            },
            {
              label: "Solution Walkthrough",
              slug: "getting-started/solution-walkthrough",
            },
            {
              label: "Adding resources to a project",
              slug: "getting-started/adding-resources-to-a-project",
            },
            {
              label: "Networking & Service Discovery",
              slug: "getting-started/networking-service-discovery",
            },
          ],
        },
        {
          label: "Building",
          items: [
            {
              label: "Project Overview",
              slug: "building/project-overview",
            },
            {
              label: "Adding a Database",
              slug: "building/adding-databases",
            },
            {
              label: "Secrets & Azure Key Vault",
              slug: "building/managing-secrets",
            },
            {
              label:
                "Handling Authenticaton & Authorization across Microservices",
              slug: "building/authenticaton-authorization",
            },
            {
              label: "Adding RabbitMQ",
              slug: "building/rabbit-mq",
            },
          ],
        },
        {
          label: "Deploying a project",
          items: [
            {
              label: "Azure CLI",
              slug: "deploying/azure-cli",
            },
            {
              label: "Aspir8",
              slug: "deploying/aspir8",
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
