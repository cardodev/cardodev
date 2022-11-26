<template>
  <section>
    <h1 class="text-5xl font-medium text-center text-white">
      Other Noteworthy Projects
    </h1>

    <div class="grid grid-cols-3 gap-10 my-10">
      <div class="p-5 my-4 rounded-lg" style="background: #19191a">
        <div class="flex items-center justify-between">
          <div>
            <Icon
              icon="akar-icons:folder"
              color="white"
              width="32"
              height="32"
            />
          </div>
          <div class="flex gap-3">
            <a class="cursor-pointer" target="__blank" href="">
              <Icon
                icon="akar-icons:github-fill"
                color="white"
                width="32"
                height="32"
              />
            </a>
            <a class="cursor-pointer" target="__blank" href="">
              <Icon
                icon="bx:link-external"
                color="white"
                width="32"
                height="32"
              />
            </a>
          </div>
        </div>
        <div class="my-4">
          <span class="text-2xl font-semibold text-white"> Revolut.Art </span>
          <p class="my-2 text-gray-200 font-extralight">
            Beautiful and embeddable NFTs Gallery. Connect your wallets, create
            a NFTs gallery and share it everywhere.
          </p>
          <div class="flex flex-wrap gap-2 my-2">
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              TypeScript
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              React
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              Next.js
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              Tailwind
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              Web3
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              Solidity
            </span>
            <span
              class="text-xs font-semibold text-gray-200 bg-slate-700 py-1 px-2 rounded-xl"
            >
              Ethereum
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
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
const notFeaturedProjects = computed(() => projects.filter((p) => !p.featured));
</script>
