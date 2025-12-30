<template>
  <nav 
    class="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :class="[
      // LOGIC 1: SHOW / HIDE (Naik Turun)
      showNavbar ? 'translate-y-0' : '-translate-y-[200%]',

      // LOGIC 2: BENTUK SAAT SCROLL (Mengecil/Melebar)
      // Saat di paling atas (top-4/top-6), saat scroll sedikit turun (top-2 biar lebih padat)
      isScrolled ? 'top-2 w-[98%] md:w-[90%]' : 'top-4 md:top-6 w-[95%] md:w-[85%] max-w-6xl'
    ]"
  >
    
    <div 
      class="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 md:py-4 shadow-2xl flex justify-between items-center relative transition-all duration-300"
      :class="{ 'py-2 md:py-3': isScrolled }" 
    >
      
      <a href="#" @click.prevent="scrollTo('#hero')" class="flex items-center gap-1 group cursor-pointer">
        <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-black group-hover:rotate-12 transition-transform">G</div>
        <span class="font-black text-white text-xl tracking-tighter">GRETIVA<span class="text-orange-500">.</span></span>
      </a>

      <div class="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="hidden md:block">
        <a 
          href="#contact" 
          @click.prevent="scrollTo('#contact')"
          class="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Let's Talk ↗
        </a>
      </div>

      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden text-white p-2 focus:outline-none"
      >
        <div class="space-y-1.5">
          <span class="block w-6 h-0.5 bg-white transition-transform" :class="{'rotate-45 translate-y-2': isMobileMenuOpen}"></span>
          <span class="block w-6 h-0.5 bg-orange-500 transition-opacity" :class="{'opacity-0': isMobileMenuOpen}"></span>
          <span class="block w-6 h-0.5 bg-white transition-transform" :class="{'-rotate-45 -translate-y-2': isMobileMenuOpen}"></span>
        </div>
      </button>

    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="absolute top-full left-0 w-full mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-4 shadow-2xl md:hidden"
      >
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="text-xl font-bold text-gray-300 hover:text-orange-500 border-b border-white/5 pb-2"
        >
          {{ item.name }}
        </a>
        <a 
          href="#contact"
          @click.prevent="scrollTo('#contact')"
          class="bg-orange-500 text-white py-3 rounded-xl font-bold text-center mt-2"
        >
          Let's Talk Now
        </a>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)   // Untuk styling (melebar/mengecil)
const showNavbar = ref(true)    // Untuk visibilitas (muncul/hilang)
const lastScrollTop = ref(0)    // Simpan posisi scroll terakhir

const menuItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About Us', href: '#about' }
]

const scrollTo = (id) => {
  isMobileMenuOpen.value = false
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// === LOGIC UTAMA DISINI ===
const handleScroll = () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop
  
  // 1. Logic Styling (Glass Effect)
  isScrolled.value = currentScroll > 50

  // 2. Logic Hide/Show (Smart Navbar)
  if (currentScroll > lastScrollTop.value && currentScroll > 100) {
    // SCROLL KE BAWAH & bukan di paling atas -> Sembunyikan
    showNavbar.value = false
    isMobileMenuOpen.value = false // Tutup menu mobile jika user scroll
  } else {
    // SCROLL KE ATAS -> Munculkan
    showNavbar.value = true
  }

  // Update posisi terakhir, tapi jangan sampai negatif (untuk Safari bounce effect)
  lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>