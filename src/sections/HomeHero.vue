<template>
  <section class="relative w-full min-h-screen flex flex-col pt-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img 
        :src="sky" 
        class="w-full h-full object-cover opacity-30"
        alt="Sky Background"
      />
    </div>

    <div 
      class="absolute bottom-0 left-1/2 w-full max-w-4xl z-0 pointer-events-none will-change-transform origin-bottom"
      :style="treeStyle"
    >
      <img 
        :src="tree" 
        alt="Magical Tree" 
        class="w-full h-auto object-contain drop-shadow-2xl mx-auto"
      />
    </div>

    <nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/80 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center z-50 shadow-sm border border-white/50">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gray-200 rounded"></div> 
        <span class="font-bold text-gray-800">GRETIVA</span>
      </div>
      
      <div class="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#" class="hover:text-purple-600 transition">Docs</a>
        <a href="#" class="hover:text-purple-600 transition">Research</a>
      </div>

      <div class="flex items-center gap-3">
        <button class="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition shadow-lg">
          Get in Touch
        </button>
      </div>
    </nav>

    <div class="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto mt-10">
      
      <span class="bg-purple-50 text-purple-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-purple-100">
        Welcome to GRETIVA
      </span>

      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 mb-8 drop-shadow-sm">
        Your Passport To <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
          Onchain Privileges
        </span>
      </h1>

      <div class="bg-white/90 backdrop-blur p-2 rounded-full shadow-xl shadow-purple-100/50 flex w-full max-w-lg border border-gray-100">
        <input 
          type="text" 
          placeholder="Your wallet address..." 
          class="flex-grow bg-transparent px-6 outline-none text-gray-600 placeholder-gray-400 text-sm"
        />
        <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition flex items-center gap-2">
          Check Score
        </button>
      </div>

    </div>

    <div class="relative z-10 mt-auto mb-20 text-center">
       </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import tree from '@/assets/images/tree.png' 
import sky from '@/assets/images/hero.jpg'

// State untuk menyimpan posisi scroll
const scrollY = ref(0)

// Function update scroll
const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Logic Scale:
// 1. translate(-50%, 0): Agar tetap di tengah horizontal (karena left-1/2).
// 2. scale(...): Base scale 1. Setiap 1px scroll, nambah 0.0005 skala.
//    Kamu bisa ubah angka 0.0005 untuk mempercepat/memperlambat zoom.
const treeStyle = computed(() => {
  const scale = 1 + (scrollY.value * 0.0005)
  return {
    transform: `translate(-50%, 0) scale(${scale})`
  }
})

// Pasang Event Listener saat komponen dimuat
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Copot Event Listener saat pindah halaman (PENTING untuk performa)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Agar transisi tidak patah-patah */
.will-change-transform {
  will-change: transform;
}
</style>