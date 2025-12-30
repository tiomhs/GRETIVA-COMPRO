<script setup>
  // import AppLayout from './layouts/Navbar.vue'
  import Home from './pages/Home.vue'
  import heroImg from './assets/images/hero.jpg'
</script>

<template>
  <div :style="{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }">
    <AppLayout></AppLayout>
    <Home />
  </div>
</template>
