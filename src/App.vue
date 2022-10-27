<template>
  <HeaderImage />
  <HeaderBlock />
  <NavigationComponent />
</template>

<script setup>
import HeaderBlock from './components/HeaderBlock.vue'
import HeaderImage from './components/HeaderImage.vue'
import NavigationComponent from './components/Navigation.vue'
</script>

<style scoped>
html {
  margin: 0;
  padding: 0;
}
</style>
