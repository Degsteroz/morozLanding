<template>
  <HeaderImage />
  <HeaderBlock />
  <NavigationComponent />
  <AboutComponent />
  <WorksComponent/>
  <PriceComponent/>
  <ContactComponent/>
  <FooterComponent/>
</template>

<script setup>
import HeaderBlock from '@/components/HeaderBlock.vue'
import HeaderImage from '@/components/HeaderImage.vue'
import NavigationComponent from '@/components/Navigation.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import WorksComponent from '@/components/WorksComponent.vue'
import PriceComponent from '@/components/PriceComponent.vue'
import ContactComponent from '@/components/ContactsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
