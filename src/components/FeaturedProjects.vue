<template>
  <section class="my-20">
    <!-- <div v-for="project in featuredProjects" :key="project.key">
      <h2 class="text-2xl text-center text-white">{{ project.name }}</h2>
      <h1
        class="my-2 text-4xl font-semibold text-center text-white"
        v-for="type in project.type"
      >
        {{ type }}
      </h1>
      <div class="flex items-center justify-center gap-5">
        <a
          target="_blank"
          :href="project.website"
          class="text-lg text-blue-500 cursor-pointer"
          href=""
          >View Site</a
        >
        <a class="text-lg text-blue-500 cursor-pointer" href="">View Detail</a>
      </div>

      <div class="flex items-center justify-center">
        <img src="/img/featured/example.png" />
      </div>
    </div> -->

    <!-- <div class="flex items-center w-full text-center justify-center my-10">
      <a
        @click="showAllProjects = !showAllProjects"
        class="cursor-pointer text-lg text-white font-semibold px-6 py-4 rounded-full bg-purple flex items-center bg-purple-hover"
      >
        <Icon icon="mingcute:file-download-line" />
        {{ showAllProjects ? "Ver menos" : "Ver todos los proyectos" }}
      </a>
    </div> -->

    <ProjectGrid client:load />
  </section>
</template>

<script setup>
import ProjectGrid from "../components/ProjectGrid.vue";
import { computed, ref } from "vue";

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
const showAllProjects = ref(false);

const featuredProjects = computed(() => projects.filter((p) => p.featured));
</script>
