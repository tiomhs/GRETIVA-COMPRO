<template>
  <Navbar />
  
  <router-view />

  <Footer />

  <Transition name="fade-up">
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop"
      class="fixed bottom-8 right-6 md:bottom-12 md:right-12 z-[9999] group flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-orange-500/50 hover:shadow-orange-500/20 overflow-hidden"
      aria-label="Back to Top"
    >
      <svg class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
        <circle
          cx="50" cy="50" r="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          stroke-width="2"
        />
        <circle
          cx="50" cy="50" r="48"
          fill="none"
          stroke="#f97316" 
          stroke-width="4"
          stroke-linecap="round"
          :style="{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset
          }"
          class="transition-all duration-300 ease-out"
        />
      </svg>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-white relative z-10 transition-all duration-300 group-hover:text-orange-500 group-hover:-translate-y-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="3"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      
    </button>
  </Transition>

</template>

<script setup>
import { onMounted, onUnmounted, watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue' 
import Lenis from 'lenis'
import 'lenis/dist/lenis.css' 

const route = useRoute()
let lenis; 

// --- STATE UNTUK BUTTON & PROGRESS ---
const showBackToTop = ref(false)
const scrollPercentage = ref(0)

// --- KONFIGURASI SVG LINGKARAN ---
// Radius lingkaran di SVG adalah 48 (r="48")
const radius = 48
const circumference = 2 * Math.PI * radius // Keliling lingkaran

// Menghitung seberapa banyak garis yang harus disembunyikan (offset) berdasarkan scroll
const dashOffset = computed(() => {
  const progress = scrollPercentage.value / 100
  return circumference * (1 - progress)
})


onMounted(() => {
  // 1. SETUP LENIS
  lenis = new Lenis({
    duration: 2.5, 
    wheelMultiplier: 0.6, 
    touchMultiplier: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // Kita gunakan listener scroll bawaan Lenis agar lebih akurat
  lenis.on('scroll', handleScroll)

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) {
    lenis.off('scroll', handleScroll)
    lenis.destroy()
  }
})

// --- LOGIC SCROLL & PROGRESS ---
// e adalah event object dari Lenis yang berisi data scroll terkini
const handleScroll = (e) => {
  // 1. Show/Hide logic (muncul setelah scroll 300px)
  showBackToTop.value = e.scroll > 300

  // 2. Calculate Progress Percentage logic
  // Rumus: Scroll saat ini / (Total tinggi halaman - tinggi layar) * 100
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  if (scrollHeight > 0) {
    const progress = (scrollTop / scrollHeight) * 100
    // Batasi antara 0 sampai 100
    scrollPercentage.value = Math.min(100, Math.max(0, progress))
  }
}

const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

watch(route, () => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true }) 
  }
  // Reset state saat pindah halaman
  showBackToTop.value = false
  scrollPercentage.value = 0
})
</script>

<style>
/* STYLE GLOBAL */
html {
  scroll-behavior: auto !important; 
}

html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

/* NEW TRANSITION: FADE UP WITH SCALE */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); /* Easing yang smooth */
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.8); /* Muncul dari bawah dan agak kecil */
}
</style>