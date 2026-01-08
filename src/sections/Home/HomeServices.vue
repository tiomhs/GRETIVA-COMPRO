<template>
  <section ref="serviceSection" class="relative bg-white overflow-hidden" id="services">
    
    <div class="min-h-screen md:h-screen flex flex-col justify-center relative py-20 md:py-0">
      
      <div class="absolute top-20 right-20 w-40 md:w-80 h-40 md:h-80 bg-orange-200/40 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-40 md:w-80 h-40 md:h-80 bg-gray-200/50 rounded-full blur-[60px] md:blur-[100px]" style="animation-delay: 1s;"></div>

      <div class="container mx-auto px-6 my-12 md:mb-0 md:mb-6 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-4">
          ● What We Do
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Playground</span>
        </h2>
      </div>

      <div class="w-full md:flex md:items-center md:py-10 md:mb-4 md:pl-[calc(50vw-225px)]">
        
        <div 
          ref="cardsTrack" 
          class="flex flex-col md:flex-row gap-8 md:gap-12 px-6 md:px-8 w-full md:w-max items-center md:items-stretch"
        >
          
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group relative w-full max-w-[350px] md:w-[450px] min-h-[450px] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] border-2 shrink-0"
            :class="[service.bgClass, service.borderClass]"
          >
            <div class="relative z-10">
              <div 
                class="w-12 h-12 md:w-14 md:h-6 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm transition-colors"
                :class="service.numberClass"
              >
                0{{ index + 1 }}
              </div>

              <h3 
                class="text-2xl font-black mb-3 leading-tight"
                :class="service.textTitleClass"
              >
                {{ service.title }}
              </h3>

              <p 
                class="text-base font-medium leading-relaxed"
                :class="service.textDescClass"
              >
                {{ service.description }}
              </p>
            </div>

            <div class="relative z-10 flex justify-end mt-4">
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="w-32 h-32 object-contain transform group-hover:rotate-6 transition-transform duration-500 animate-float custom-shadow"
              />
            </div>

          </div>

          <div class="hidden md:block w-[50vw] flex-shrink-0"></div>

        </div>
      </div>

      <div class="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-gray-400 font-bold text-sm tracking-widest">
        <span class="animate-bounce">←</span> SCROLL DOWN <span class="animate-bounce">→</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import services from '@/data/service.js'

gsap.registerPlugin(ScrollTrigger)

const serviceSection = ref(null)
const cardsTrack = ref(null)

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    // DETEKSI MOBILE / DESKTOP
    // Menggunakan ScrollTrigger.matchMedia() adalah cara paling robust
    ScrollTrigger.matchMedia({
      
      // Desktop Only (Min Width 768px): Aktifkan Horizontal Scroll
      "(min-width: 768px)": function() {
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
      },

      // Mobile (Max Width 767px): Matikan/Jangan lakukan apa-apa (Native Scroll Vertikal)
      "(max-width: 767px)": function() {
        // Tidak ada GSAP animation, biarkan scroll biasa
      }
      
    });

  }, serviceSection.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
.custom-shadow {
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>