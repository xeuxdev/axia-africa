<script setup>
import HeaderComponent from "../../components/Header/HeaderComponent.vue"
import HeroSection from "../../components/Home/HeroSection.vue"
import CoursesSection from "../../components/Home/CoursesSection.vue"
import AdvisorSection from "../../components/Home/AdvisorSection.vue"
import OnboardSection from "../../components/Home/OnboardSection.vue"
import DiscoverSection from "../../components/Home/DiscoverSection.vue"
import FosterKnowledgeSection from "../../components/Home/FosterKnowledgeSection.vue"
import OurSuccessSection from "../../components/Home/OurSuccessSection.vue"
import PartnerSection from "../../components/Home/PartnerSection.vue"
import FooterComponent from "../../components/Footer/FooterComponent.vue"
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
