<template>
  <section class="border-t border-white/10 py-24 bg-[#0a0a0a] relative overflow-hidden">
    
    <div class="absolute left-0 bottom-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="mb-16 max-w-2xl">
        <span class="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">
          Need Answers?
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-white">
          Frequently Asked <span class="text-gray-500">Questions.</span>
        </h2>
      </div>

      <div class="max-w-4xl">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border-b border-white/10 last:border-0"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full flex justify-between items-center py-8 text-left group focus:outline-none"
          >
            <span 
              class="text-xl md:text-2xl font-bold transition-colors duration-300"
              :class="openIndex === index ? 'text-orange-500' : 'text-white group-hover:text-orange-400'"
            >
              {{ faq.question }}
            </span>

            <span class="relative ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <span class="absolute w-6 h-[2px] bg-white transition-colors duration-300" :class="{'bg-orange-500': openIndex === index}"></span>
              <span 
                class="absolute w-6 h-[2px] bg-white transition-transform duration-300 ease-out"
                :class="openIndex === index ? 'rotate-90 opacity-0' : 'rotate-90'"
              ></span>
            </span>
          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="text-gray-400 text-lg leading-relaxed max-w-3xl">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import faqs from '@/data/faqs.js'

// STATE ACCORDION
const openIndex = ref(0) // Default pertanyaan pertama terbuka (0), atau null jika mau tertutup semua

const toggleFaq = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null // Tutup jika diklik lagi
  } else {
    openIndex.value = index // Buka yang baru
  }
}

</script>