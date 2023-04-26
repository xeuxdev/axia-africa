<script setup>
import HeroSection from "../../components/Schools/Data/HeroSection.vue"
import DataAnalyst from "../../components/Schools/Data/DataAnalyst.vue"
import DataScientist from "../../components/Schools/Data/DataScientist.vue"
import FooterComponent from "../../components/Footer/FooterComponent.vue"
import HeaderComponent from "../../components/Header/HeaderComponent.vue"
import OnboardSection from "../../components/Schools/OnboardSection.vue"
import OurSuccessSection from "../../components/Home/OurSuccessSection.vue"
</script>

<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <DataAnalyst />
    <DataScientist />
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
