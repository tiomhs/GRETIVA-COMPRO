<template>
  <section ref="heroSection" class="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
    
    <div ref="portalContainer" class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none will-change-transform">
      <img 
        ref="portalImageEl"
        :src="portalImage" 
        alt="Magical Golden Gateway" 
        class="w-full h-full object-cover scale-105 transform-origin-[center_60%]"
      />
    </div>

    <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div 
        v-for="n in 40" 
        :key="n"
        class="firefly absolute rounded-full bg-orange-300 mix-blend-screen"
        :style="getFireflyStyle(n)"
      ></div>
    </div>

    <div class="absolute inset-0 z-15 bg-black/30 pointer-events-none"></div>


    <div ref="orangeOverlay" class="absolute inset-0 z-20 bg-orange-500 mix-blend-overlay opacity-0 pointer-events-none"></div>
    <div ref="whiteFlash" class="absolute inset-0 z-20 bg-orange-50 mix-blend-normal opacity-0 pointer-events-none"></div>

    <div ref="heroContent" class="relative z-30 text-center px-4 md:px-6 w-full max-w-[90%] md:max-w-3xl lg:max-w-5xl mt-[-5vh] md:mt-[-10vh]">
      
      <div class="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-black/40 backdrop-blur-xl border border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)] mb-6 md:mb-8 hover:scale-105 transition-transform">
        <span class="relative flex h-2 w-2 md:h-3 md:w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-orange-500"></span>
        </span>
        <span class="font-bold text-orange-100 text-[10px] md:text-sm tracking-wider uppercase font-mono">GRETIVA ARTHA GROUP</span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight md:leading-none mb-6 md:mb-8 drop-shadow-2xl">
          We Build Tech. <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 animate-gradient-x block md:inline mt-2 md:mt-0">
          We Create Hype.
        </span>
      </h1>

      <p class="text-base sm:text-lg md:text-2xl text-orange-100/90 font-medium w-full max-w-md md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed drop-shadow-sm px-2 md:px-0">
        Stop juggling 5 different agencies. We handle your Development, Branding, and Content Production under one roof. Sit back, we got this.
      </p>

      <div>
        <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold focus:outline-none transform active:scale-95 transition-transform">
          <span class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F97316_0%,#FBBF24_50%,#F97316_100%)]"></span>
          <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 md:px-10 md:py-4 text-sm md:text-lg text-orange-100 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white backdrop-blur-3xl">
            Let’s Collaborate
          </span>
        </button>
      </div>

    </div>
    
    <div ref="scrollHint" class="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-2 text-orange-300/70 text-xs md:text-sm font-bold tracking-widest animate-bounce z-30 pointer-events-none">
      <p>SCROLL TO ENTER</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Pastikan path gambar benar
import portalImage from '@/assets/images/image_4.webp' 

gsap.registerPlugin(ScrollTrigger)

const heroSection = ref(null)
const portalContainer = ref(null)
const portalImageEl = ref(null)
const heroContent = ref(null)
const orangeOverlay = ref(null)
const whiteFlash = ref(null)
const scrollHint = ref(null)

const getFireflyStyle = (i) => {
  const size = Math.random() * 6 + 2 + 'px' 
  return {
    width: size,
    height: size,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 5 + 's',
    animationDuration: Math.random() * 10 + 5 + 's',
    opacity: Math.random() * 0.7 + 0.3
  }
}

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile ? "+=1000" : "+=1500"

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top top",
        end: scrollDistance, 
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    })

    tl.to(portalContainer.value, {
      scale: isMobile ? 15 : 25,
      ease: "power2.inOut",
    }, 0)

    tl.to(portalImageEl.value, {
      filter: "blur(20px)", 
      ease: "power1.in",
    }, 0)

    tl.to([heroContent.value, scrollHint.value], {
      opacity: 0,
      y: -100,
      scale: 0.9,
      ease: "power1.in",
      duration: 0.4 
    }, 0)

    tl.to(orangeOverlay.value, {
      opacity: 0.9, 
      ease: "power2.in",
    }, 0.2) 

    tl.to(whiteFlash.value, {
      opacity: 1,
      ease: "power1.in",
    }, 0.6)

  }, heroSection.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped>
/* Style tetap sama */
.transform-origin-\[center_60\%\] {
  transform-origin: center 60%;
}

@keyframes gradient-x {
  0%, 100% { background-position: left center; background-size: 200% 200%; }
  50% { background-position: right center; background-size: 200% 200%; }
}
.animate-gradient-x {
  animation: gradient-x 5s ease infinite;
}

@keyframes floatUp {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  20% { opacity: 1; }
  50% { transform: translateY(-50px) translateX(20px); opacity: 0.8; }
  80% { opacity: 1; }
  100% { transform: translateY(-100px) translateX(-20px); opacity: 0; }
}

.firefly {
  box-shadow: 0 0 10px 2px rgba(253, 186, 116, 0.8); 
  animation: floatUp linear infinite;
}
</style>