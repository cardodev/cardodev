<template>
  <section class="my-20">
    <h1 class="text-5xl font-semibold text-center text-white">
      Where i
      <span
        class="flex justify-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600"
      >
        Worked?.
      </span>
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
          <span class="mx-2">{{ job.company }} </span>
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
              <p>Santiago, 🇨🇱 CL</p>

              <ul>
                <li
                  v-for="feature in selectedJob.features"
                  :key="selectedJob.key"
                  class="my-3 pl-4"
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
    startDate: "July 2022",
    endDate: "Present",
    features: [],
  },
  // {
  //   role: "Senior Full-stack Engineer",
  //   company: "Prtal",
  //   key: "prtal",
  //   companyWebsite: "https://apside.cl/",
  //   companyLogo: "/img/experience/apside.jpeg",
  //   startDate: "Sep 2022",
  //   endDate: "Present",
  //   features: [
  //     "Proposed and implemented scalable solutions to issues identified in the application.",
  //   ],
  // },
  {
    role: "Full-stack Engineer",
    company: "Pckz",
    key: "pckz",
    companyWebsite: "https://pckz.cl/",
    companyLogo: "/img/experience/pckz.gif",
    startDate: "Ago 2021",
    endDate: "Jun 2022",
    features: [
      "Digital products with user experience designers and other developers to ensure thoughtful and efficient implementation of features.",
    ],
  },
];
const selectedJob = ref(jobs[0]);
const setSelectedJob = (job) => {
  selectedJob.value = job;
};
</script>

<style scoped>
li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  color: #6200ee;
}
</style>
