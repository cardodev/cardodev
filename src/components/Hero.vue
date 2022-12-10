<template>
  <section class="hero_section" id="hero">
    <div class="grid grid-cols-2 py-40 mx-auto text-center">
      <div class="flex flex-col items-start justify-start gap-6">
        <h1 class="text-7xl font-bold text-left text-white typed-text my-8">
          dcgx<span class="text-purple text-7xl font-bold">.dev</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: true }">&nbsp;</span>
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
          <a
            href="/resume.pdf"
            target="_blank"
            class="cursor-pointer text-md text-white font-medium px-4 py-2 rounded-full bg-purple flex items-center bg-purple-hover"
          >
            <Icon
              icon="system-uicons:file-download"
              width="24px"
              class="mr-1"
            />
            Curriculum
          </a>
          <button
            class="cursor-pointer text-md text-white font-medium px-4 py-2 rounded-full bg-sky-600 flex items-center hover:bg-sky-700"
          >
            <Icon icon="ic:round-work-outline" width="24px" class="mr-1" />
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

<style>
.blinking-cursor {
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #fff;
  }
}
</style>
