<script setup>
import HeaderComponent from "./components/HeaderComponent.vue"
import HeroSection from "./components/HeroSection.vue"
import CoursesSection from "./components/CoursesSection.vue"
import AdvisorSection from "./components/AdvisorSection.vue"
</script>

<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <CoursesSection />
    <AdvisorSection />
  </main>
</template>
