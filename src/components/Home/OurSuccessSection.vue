<script setup>
import { Vue3Marquee } from "vue3-marquee"
import "vue3-marquee/dist/style.css"
import { reviewData } from "../../data/reviewData"
</script>

<template>
  <section class="w-full my-24">
    <div class="container px-5 lg:px-[9.375rem]">
      <!-- text -->
      <div class="space-y-5">
        <header
          role="heading"
          aria-level="7"
          class="font-medium text-[1.75rem] md:text-4xl text-darkish heading"
        >
          Our success story
        </header>
        <p class="text-darkgrey text-base md:text-lg max-w-xl">
          What our students are saying about their learning experience.
        </p>
      </div>
    </div>
    <!-- marque -->
    <div class="flex gap-5 mt-24">
      <Vue3Marquee :duration="80" :pauseOnHover="true">
        <!-- cards -->
        <template v-for="review in reviewData" :key="review.id">
          <div
            class="relative bg-brown flex justify-between flex-col mx-5 p-6 w-[23.4375rem] min-h-[24rem]"
          >
            <p class="text-sm md:text-base text-darkgrey font-medium">
              {{ review.review }}
            </p>
            <div class="flex items-center gap-5">
              <img
                :src="'/images/reviews/' + review.id + '.png'"
                :alt="review.name"
                class="h-14 md:h-auto"
              />
              <header class="font-bold ml-5 md:text-xl text-lg text-darkgrey">
                {{ review.name }}
              </header>
            </div>
          </div>
        </template>
      </Vue3Marquee>
    </div>
  </section>
</template>
