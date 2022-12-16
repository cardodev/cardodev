<template>
  <section>
    <h1 class="text-5xl font-semibold text-center text-white">Techs</h1>
    <div class="mt-10" style="min-height: 160px">
      <swiper
        :slidesPerView="4"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="(stack, index) in stacks">
          <a
            :href="`projects/?tag=${stack.tag}`"
            class="flex items-center justify-center py-5 mx-4 border-transparent cursor-pointer rounded-2xl hover:border hover:border-gray-700 hover:transition hover:duration-100"
            style="width: auto; min-width: 265px; background: #19191a"
          >
            <div class="flex items-center justify-center pl-2 pr-4">
              <Icon width="60" :icon="stack.icon" />
            </div>
            <div>
              <span class="text-4xl font-medium text-gray-300">
                {{ stack.name }}
              </span>
              <p class="font-light">
                {{ stack.experience }} years of experience
              </p>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const modules = [Autoplay, Pagination, Navigation];

const stacks = [
  {
    name: "JavaScript",
    tag: "javascript",
    experience: 2,
    icon: "logos:javascript",
  },
  { name: "PHP", tag: "php", experience: 2, icon: "logos:php" },
  { name: "Vue", tag: "vue", experience: 2, icon: "logos:vue" },
  { name: "Nuxt.js", tag: "nuxt", experience: 2, icon: "logos:nuxt-icon" },
  { name: "Laravel", tag: "laravel", experience: 2, icon: "logos:laravel" },
  {
    name: "Tailwind",
    tag: "tailwind",
    experience: 2,
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Bootstrap",
    tag: "bootstrap",
    experience: 2,
    icon: "logos:bootstrap",
  },
  { name: "GitLab", tag: "gitlab", experience: 2, icon: "logos:gitlab" },
];
</script>
