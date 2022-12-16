<template>
  <section class="hero_section" id="hero">
    <div class="grid grid-cols-2 py-40 mx-auto text-center">
      <div class="flex flex-col items-start justify-center gap-6">
        <div class="flex gap-4">
          <h1>Software Engineer</h1>
          <h1>Full-stack Engineer</h1>
          <h1>Freelance</h1>
        </div>
        <p class="text-xl font-light text-left text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem accusamus tenetur recusandae, ut sunt porro maxime
          nesciunt fugiat aliquid, cumque autem dolores optio culpa omnis
          assumenda repellendus dolorum rem mollitia!
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
            Experience
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
