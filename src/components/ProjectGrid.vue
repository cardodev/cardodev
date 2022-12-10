<template>
  <div>
    <main class="mx-auto max-w-7xl">
      <!-- <div class="flex items-center w-full text-center justify-center my-10">
        <a
          @click="showAllProjects = !showAllProjects"
          class="cursor-pointer text-lg text-white font-semibold px-6 py-4 rounded-full bg-purple flex items-center bg-purple-hover"
        >
          <Icon icon="mingcute:file-download-line" />
          {{ showAllProjects ? "Ver menos" : "Ver todos los proyectos" }}
        </a>
      </div> -->

      <section class="grid grid-cols-2 gap-10 project-grids projects-grid">
        <a
          v-for="project in projects"
          :key="project.key"
          :href="`/projects/${project.key}`"
        >
          <article>
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

      <section class="grid grid-cols-3 gap-10 project-grids projects-grid">
        <a
          v-for="project in projects"
          :key="project.key"
          :href="`/projects/${project.key}`"
        >
          <article>
            <img src="/img/projects/example.png" />
            <div class="flex flex-col items-start justify-center my-2">
              <span>Abril 2022</span>
              <span class="text-lg font-medium text-white">{{
                project.name
              }}</span>
            </div>
          </article>
        </a>
        <a
          @click="showAllProjects = !showAllProjects"
          style="max-height: 465px"
          class="cursor-pointer flex-col text-lg rounded text-white bg-gray-900 font-semibold flex justify-center items-center"
        >
          <div
            class="bg-purple flex items-center p-8 rounded-lg shadow-lg text-6xl font-semibold"
          >
            6
            <!-- {{ showAllProjects ? "Ver menos" : "Ver todos los proyectos" }} -->
          </div>
          <span class="mt-5 text-white font-semibold">Ver todos</span>
          <span class="text-gray-300 font-extralight">Proyectos restantes</span>
        </a>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
const showAllProjects = ref(false);

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
  {
    name: "Revolut.Art",
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
