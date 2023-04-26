<script setup>
import HeroSection from "../../components/Schools/Products/HeroSection.vue"
import ProductDesigner from "../../components/Schools/Products/ProductDesigner.vue"
import ProductManager from "../../components/Schools/Products/ProductManager.vue"
import ProductMarketer from "../../components/Schools/Products/ProductMarketer.vue"
import FooterComponent from "../../components/Footer/FooterComponent.vue"
import HeaderComponent from "../../components/Header/HeaderComponent.vue"
import OnboardSection from "../../components/Schools/OnboardSection.vue"
import OurSuccessSection from "../../components/Home/OurSuccessSection.vue"
</script>
<template>
  <HeaderComponent />

  <main class="relative pt-28">
    <HeroSection />
    <ProductDesigner />
    <ProductManager />
    <ProductMarketer />
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
