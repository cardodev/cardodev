<template>
  <div class="mx-auto max-w-7xl">
    <section class="grid grid-cols-2 gap-10 project-grids projects-grid">
      <a
        v-for="project in projects.filter((p) => p.featured && p.featuredGrid)"
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
        v-for="project in projects.filter((p) => p.featured && !p.featuredGrid)"
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
  </div>
</template>

<script setup>
import { projects } from "../data";
import { computed, ref } from "vue";

const showAllProjects = ref(false);

</script>
