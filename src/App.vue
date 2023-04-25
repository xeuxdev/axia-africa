<script setup>
import HeaderComponent from "./components/Header/HeaderComponent.vue"
import HeroSection from "./components/HeroSection.vue"
import CoursesSection from "./components/CoursesSection.vue"
import AdvisorSection from "./components/AdvisorSection.vue"
import OnboardSection from "./components/OnboardSection.vue"
import DiscoverSection from "./components/DiscoverSection.vue"
</script>

<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <CoursesSection />
    <AdvisorSection />
    <OnboardSection />
    <DiscoverSection />
  </main>
</template>
