<template>
  <section class="hero_section" id="hero">
    <div class="grid grid-cols-2 py-40 mx-auto text-center">
      <div class="flex flex-col items-start justify-start gap-6">
        <h1 class="text-7xl font-bold text-left text-white typed-text my-8">
          dcgx<span class="text-purple text-7xl font-bold">.dev</span>
        </h1>
        <h1 class="text-5xl font-regular text-left text-white typed-text">
          Full-stack Developer and
        </h1>
        <h1 class="text-5xl font-medium text-left text-purple">
          Mobile Developer.
        </h1>
        <p class="text-xl font-light text-left text-gray-300">
          I specialized in Web Development. I have experience in Frontend and
          Backend Development.
        </p>
        <div class="flex gap-5">
          <button
            class="cursor-pointer text-md text-white font-medium px-4 py-2 rounded-full bg-purple flex items-center bg-purple-hover"
          >
            <Icon icon="mingcute:file-download-line" />
            Curriculum
          </button>
          <button
            class="cursor-pointer text-md text-white font-medium px-4 py-2 rounded-full bg-sky-600 flex items-center hover:bg-sky-700"
          >
            <Icon icon="mingcute:file-download-line" />
            Experiencia
          </button>
        </div>
      </div>
      <div class="items-center justify-center hidden lg:flex">
        <img
          class="absolute top-28 rounded-full bottom-0 z-40"
          src="/img/profile.jpeg"
        />
        <img
          src="/img/hero/circle.png"
          alt="Dylan's avatar"
          width="520px"
          class="rounded-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
