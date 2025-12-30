<template>
  <Navbar />
    <router-view />
  <Footer />
</template>

<script setup>
import Navbar from './components/common/navbar.vue'
import Footer from './components/common/footer.vue'
</script>