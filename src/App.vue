<script setup>
  import Home from './pages/Home.vue'
  import heroImg from './assets/images/hero.jpg'
</script>

<template>
  <div :style="{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }">
    <Home />
  </div>
</template>
