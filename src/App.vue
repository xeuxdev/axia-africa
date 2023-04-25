<script setup>
import HeaderComponent from "./components/Header/HeaderComponent.vue"
import HeroSection from "./components/HeroSection.vue"
import CoursesSection from "./components/CoursesSection.vue"
import AdvisorSection from "./components/AdvisorSection.vue"
import OnboardSection from "./components/OnboardSection.vue"
import DiscoverSection from "./components/DiscoverSection.vue"
import FosterKnowledgeSection from "./components/FosterKnowledgeSection.vue"
import OurSuccessSection from "./components/OurSuccessSection.vue"
import PartnerSection from "./components/PartnerSection.vue"
import FooterComponent from "./components/Footer/FooterComponent.vue"
</script>

<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <CoursesSection />
    <AdvisorSection />
    <OnboardSection />
    <DiscoverSection />
    <FosterKnowledgeSection />
    <OurSuccessSection />
    <PartnerSection />
  </main>

  <footer
    id="footer"
    class="bg-primary text-white p-5 py-12 md:pt-24 md:pb-14 w-full mx-auto"
  >
    <FooterComponent />
  </footer>
</template>
