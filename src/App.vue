<template>
  <Navbar />
  
  <router-view />

  <Footer />
</template>

<script setup>
import { onMounted, watch } from 'vue' // Tambahkan 'watch'
import { useRoute } from 'vue-router'  // Tambahkan 'useRoute'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue' 
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' 

// 1. Inisialisasi Route
const route = useRoute()

// 2. Deklarasi variabel lenis di luar agar bisa diakses global di file ini
let lenis; 

onMounted(() => {
  // Jangan pakai 'const' di sini, pakai variabel global 'lenis' yang sudah dibuat di atas
  lenis = new Lenis({
    duration: 2.5, 
    wheelMultiplier: 0.6, 
    touchMultiplier: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

// 3. Watcher: Setiap kali rute berubah (pindah page), paksa scroll ke atas
watch(route, () => {
  if (lenis) {
    // immediate: true = Langsung teleport ke atas (tanpa animasi scroll naik)
    // Kalau mau animasi scroll naik, hapus { immediate: true }
    lenis.scrollTo(0, { immediate: true }) 
  }
})
</script>

<style>
html {
  /* Matikan smooth scroll bawaan browser agar tidak bentrok dengan Lenis */
  scroll-behavior: auto !important; 
}

/* CSS Wajib Lenis */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
</style>