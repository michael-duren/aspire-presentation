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
          label: "How does .NET Aspire work?",
          items: [
            {
              label: "How does .NET Aspire work?",
              slug: "how-does-aspire-work",
            },
            {
              label: "Networking & Service Discovery",
              slug: "how-does-aspire-work/networking-service-discovery",
            },
            {
              label: "Setting up a aspire project",
              slug: "how-does-aspire-work/setting-up-a-project",
            },
            {
              label: "Adding resources to a project",
              slug: "how-does-aspire-work/adding-resources-to-a-project",
            },
          ],
        },
        {
          label: "Building",
          items: [
            {
              lable: "Project Overview",
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
