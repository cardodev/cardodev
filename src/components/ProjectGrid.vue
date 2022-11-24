<template>
  <div>
    <main class="mx-auto max-w-7xl">
      <section class="grid grid-cols-2 gap-10 project-grids projects-grid">
        <a
          v-for="project in projects"
          :key="project.key"
          :href="`/projects/${project.key}`"
        >
          <article
            class="lg:transition-transform lg:duration-300 lg:hover:scale-105"
          >
            <img src="/img/projects/example.png" />
            <div class="flex flex-col items-start justify-center my-2">
              <span>Abril 2022</span>
              <span class="text-lg font-medium text-white">{{
                project.name
              }}</span>
            </div>
          </article>
        </a>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const projects = [
  {
    name: "Portal Smarthomy",
    key: "ambar",
    website: "https://app.ambar.pet/",
    description: "A single web application (SPA)",
    type: ["WebApp"],
    technologies: ["Vue", "Bootstrap", "GitLab"],
    repositoryProvider: "bitbucket",
    repositoryLink: null,
    featured: false,
  },
  {
    name: "Ambar.pet",
    key: "ambar",
    website: "https://portal.smarthomy.com/",
    description: "A single web application (SPA)",
    type: ["WebApp"],
    technologies: ["Vue", "Bootstrap", "AWS Amplify", "Bitbucket", "SPA"],
    repositoryProvider: "bitbucket",
    repositoryLink: null,
    featured: false,
  },
  {
    name: "prtal",
    website: "https://prtal.app/",
    key: "prtal",
    type: ["WebApp"],
    repositoryProvider: "gitlab",
    repositoryLink: null,
    featured: true,
  },
];
</script>

<style></style>
