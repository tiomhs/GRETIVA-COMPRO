<template>
  <nav 
    class="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :class="[
      showNavbar ? 'translate-y-0' : '-translate-y-[200%]',
      isScrolled ? 'top-2 w-[98%] md:w-[90%]' : 'top-4 md:top-6 w-[95%] md:w-[85%] max-w-6xl'
    ]"
  >
    
    <div 
      class="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 md:py-4 shadow-2xl flex justify-between items-center relative transition-all duration-300"
      :class="{ 'py-2 md:py-3': isScrolled }" 
    >
      
      <a href="/" class="flex items-center">
        <img 
          src="/logo.png" 
          alt="Gretiva Logo" 
          class="h-10 w-auto object-contain" 
        />
      </a>

      <div class="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href"
          @click.prevent="handleNavigation(item)"
          class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="hidden md:block">
       <a 
          href="https://wa.me/6281236573953" 
          target="_blank"
          class="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
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
          @click.prevent="handleNavigation(item)"
          class="text-xl font-bold text-gray-300 hover:text-orange-500 border-b border-white/5 pb-2 cursor-pointer"
        >
          {{ item.name }}
        </a>
        
        <a 
          href="#contact"
          @click.prevent="handleNavigation({ href: '/#contact', type: 'scroll' })"
          class="bg-orange-500 text-white py-3 rounded-xl font-bold text-center mt-2 cursor-pointer"
        >
          Let's Talk Now
        </a>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logo from '@/assets/images/logo.png'

const router = useRouter()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showNavbar = ref(true)
const lastScrollTop = ref(0)

// Config Menu (Hybrid: Ada yang Scroll, Ada yang Pindah Page)
const menuItems = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'About Us', href: '/about', type: 'route' },
  { name: 'Project', href: '/project', type: 'route' },
  { name: 'Contact', href: '/contact', type: 'route' },
]

// === LOGIC NAVIGASI UTAMA ===
const handleNavigation = async (item) => {
  isMobileMenuOpen.value = false // Tutup menu mobile
  
  if (item.type === 'route') {
    // KASUS 1: Link Biasa (Pindah Halaman)
    // Cek dulu apakah kita sudah di halaman itu?
    if (route.path === item.href) {
      // Jika klik 'Home' saat di Home, scroll ke paling atas
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      await router.push(item.href)
    }
  } 
  else if (item.type === 'scroll') {
    // KASUS 2: Link Scroll (#id)
    const targetId = item.href.replace('/', '') // Ambil #id saja (misal: #services)
    
    if (route.path !== '/') {
      // Jika kita TIDAK di Home (misal di About), pindah dulu ke Home
      await router.push('/')
      // Tunggu sebentar biar halaman Home loading, baru scroll
      setTimeout(() => {
        scrollToId(targetId)
      }, 500)
    } else {
      // Jika SUDAH di Home, langsung scroll
      scrollToId(targetId)
    }
  }
}

// Helper: Fungsi Scroll ke Elemen ID
const scrollToId = (id) => {
  // Cek apakah ID-nya ada hash (#) atau tidak, pastikan ada
  const selector = id.startsWith('#') ? id : `#${id}`
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// === LOGIC SCROLL NAVBAR (Hide/Show) ===
const handleScroll = () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop
  isScrolled.value = currentScroll > 50
  
  // Logic Smart Hide/Show
  if (currentScroll > lastScrollTop.value && currentScroll > 100) {
    showNavbar.value = false
    isMobileMenuOpen.value = false
  } else {
    showNavbar.value = true
  }
  lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>