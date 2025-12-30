<template>
  <section ref="serviceSection" class="relative bg-white overflow-hidden" id="services">
    
    <div class="h-screen flex flex-col justify-center relative">
      
      <div class="absolute top-20 right-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-80 h-80 bg-gray-200/50 rounded-full blur-[100px]" style="animation-delay: 1s;"></div>

      <div class="container mx-auto px-6 mb-12 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-4">
          ● What We Do
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-gray-900">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Playground</span>
        </h2>
      </div>

      <div class="w-full overflow-hidden flex items-center py-10 pl-[50vw] md:pl-[calc(50vw-225px)]">
        
        <div ref="cardsTrack" class="flex gap-8 md:gap-12 px-8 w-max">
          
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group relative w-[350px] md:w-[450px] h-[500px] md:h-[550px] rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] border-2"
            :class="[service.bgClass, service.borderClass]"
          >
            <div class="relative z-10">
              <div 
                class="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-8 shadow-sm transition-colors"
                :class="service.numberClass"
              >
                0{{ index + 1 }}
              </div>

              <h3 
                class="text-3xl md:text-4xl font-black mb-4 leading-tight"
                :class="service.textTitleClass"
              >
                {{ service.title }}
              </h3>

              <p 
                class="text-lg font-medium leading-relaxed"
                :class="service.textDescClass"
              >
                {{ service.description }}
              </p>
            </div>

            <div class="relative z-10 flex justify-end mt-4">
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="w-48 h-48 object-contain transform group-hover:rotate-6 transition-transform duration-500 animate-float custom-shadow"
              />
            </div>

          </div>

          <div class="w-[50vw] flex-shrink-0"></div>

        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest">
        <span class="animate-bounce">←</span> SCROLL DOWN <span class="animate-bounce">→</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const serviceSection = ref(null)
const cardsTrack = ref(null)

// DATA SERVICES (Color Palette: Orange, Black, White, Grey)
import services from '@/data/service.js'

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const totalScroll = cardsTrack.value.scrollWidth - window.innerWidth;

    gsap.to(cardsTrack.value, {
      x: () => -totalScroll, 
      ease: "none", 
      scrollTrigger: {
        trigger: serviceSection.value,
        pin: true,
        scrub: 1, 
        end: "+=3000", 
        anticipatePin: 1
      }
    })
  }, serviceSection.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 1. FORCE SHADOW PADA GAMBAR */
/* Ini akan membuat gambar PNG yang flat jadi punya bayangan 3D */
.custom-shadow {
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

/* 2. ANIMASI FLOATING */
/* Biar gambarnya gerak-gerak halus (tidak kaku) */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>