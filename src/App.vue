<template>
  <Navbar />
  
  <router-view />

  <Footer />
</template>

<script setup>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue' 
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' 

onMounted(() => {
  const lenis = new Lenis({
    // 1. DURATION: Seberapa lama scroll "meluncur" sampai berhenti.
    // Angka besar = makin licin/lama berhentinya.
    duration: 2.5, 

    // 2. WHEEL MULTIPLIER (INI KUNCINYA):
    // Default 1. Ubah ke 0.5 atau lebih kecil agar gerakan jadi "Berat/Lambat".
    // Artinya: 1x putar roda mouse cuma gerak setengah jarak normal.
    wheelMultiplier: 0.6, 

    // 3. TOUCH MULTIPLIER:
    // Untuk Trackpad/Touchscreen biar gak terlalu liar
    touchMultiplier: 1.5,

    // Config standar
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // Loop animasi wajib
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<style>
html {
  /* HAPUS/OVERRIDE scroll-behavior: smooth bawaan jika ada */
  scroll-behavior: auto !important; 
}

/* Rekomendasi Lenis */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
</style>