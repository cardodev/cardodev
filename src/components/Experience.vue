<template>
  <section class="my-20">
    <h1 class="text-4xl font-semibold text-center text-white">
      Where i Worked
    </h1>

    <div class="grid grid-cols-3 my-14">
      <div class="col-span-1">
        <div
          v-for="job in jobs"
          :key="job.key"
          class="p-2 py-6 mx-5 text-xl border-l-4 cursor-pointer hover:text-violet-800 hover:border-l-violet-700"
          :class="
            job.key === selectedJob.key
              ? 'text-violet-800 border-l-violet-700'
              : ' text-violet-100 border-l-violet-400'
          "
          @click="setSelectedJob(job)"
          role="tab"
        >
          <span class="mx-2">{{ job.company }}</span>
        </div>
      </div>
      <div class="col-span-2" role="tablist">
        <div class="relative w-full">
          <div class="w-full">
            <div>
              <div class="flex justify-between text-xl text-white">
                <div>
                  <span class="font-semibold">{{ selectedJob.role }}</span>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="selectedJob.companyWebsite"
                  >
                    <img
                      width="45"
                      class="cursor-pointer rounded-xl"
                      :src="selectedJob.companyLogo"
                    />
                  </a>
                </div>
              </div>

              <p class="my-1 font-light">
                {{ selectedJob.startDate }} - {{ selectedJob.endDate }}
              </p>

              <ul>
                <li
                  v-for="feature in selectedJob.features"
                  :key="selectedJob.key"
                  class="my-3"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const jobs = [
  {
    role: "Software Engineer",
    company: "Apside",
    key: "apside",
    companyWebsite: "https://apside.cl/",
    companyLogo: "/img/experience/apside.jpeg",
    startDate: "Jul 2022",
    endDate: "present",
    features: [
      "Desarrollo a través de prácticas ágiles (Scrum).",
      "Desarrollo frontend con arquitectura microfrontend a través de la plataforma Modyo y el framework Vue.js.",
      "Desarrollo en arquitectura de microservicios a través de patrón BFF con Python, FastAPI y NestJS.",
      "Control de versiones con Git y Bitbucket.",
    ],
  },
  // {
  //   role: "Backend Developer",
  //   company: "prtal",
  //   key: "prtal",
  //   companyWebsite: "https://prtal.app/",
  //   companyLogo: "/img/experience/apside.jpeg",
  //   startDate: "Sep 2022",
  //   endDate: "present",
  //   features: ["Desarrollo de API REST con PHP y Laravel."],
  // },
  {
    role: "Full-stack Developer",
    company: "Pckz",
    key: "pckz",
    companyWebsite: "https://pckz.cl/",
    companyLogo: "/img/experience/pckz.gif",
    startDate: "Ago 2021",
    endDate: "Jun 2022",
    features: [
      "Desarrollador Full-stack de sistemas a medida para distintos clientes según requerimientos, en conjunto con equipo de UX/UI",
      "Creación de interfaces de usuarios usando JavaScript, Vue.js/Nuxt.js, SSR, SPA",
      "Creación de API REST con PHP / Laravel con integración con SPA en Vue.js/Nuxt.js",
      "Implementación de sistemas de pago y envíos como Kushki y Shipit",
      "Control de versiones con Git y Gitlab",
    ],
  },
];
const selectedJob = ref(jobs[0]);
const setSelectedJob = (job) => {
  selectedJob.value = job;
};
</script>
