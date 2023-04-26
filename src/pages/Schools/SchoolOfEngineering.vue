<script setup>
import HeroSection from "../../components/Schools/Engineering/HeroSection.vue"
import BackendDeveloper from "../../components/Schools/Engineering/BackendDeveloper.vue"
import MobileDeveloper from "../../components/Schools/Engineering/MobileDeveloper.vue"
import FooterComponent from "../../components/Footer/FooterComponent.vue"
import HeaderComponent from "../../components/Header/HeaderComponent.vue"
import OnboardSection from "../../components/Schools/OnboardSection.vue"
import OurSuccessSection from "../../components/Home/OurSuccessSection.vue"
import FrontendDeveloper from "../../components/Schools/Engineering/FrontendDeveloper.vue"
</script>

<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <FrontendDeveloper />
    <BackendDeveloper />
    <MobileDeveloper />
    <OnboardSection />
    <OurSuccessSection />
  </main>

  <footer
    id="footer"
    class="bg-primary text-white p-5 py-12 md:pt-24 md:pb-14 w-full mx-auto"
  >
    <FooterComponent />
  </footer>
</template>
