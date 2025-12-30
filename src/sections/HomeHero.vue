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
        v-for="n in 20" 
        :key="n"
        class="firefly absolute rounded-full bg-orange-300 mix-blend-screen"
        :style="getFireflyStyle(n)"
      ></div>
    </div>

    <div ref="orangeOverlay" class="absolute inset-0 z-20 bg-orange-500 mix-blend-overlay opacity-0 pointer-events-none"></div>
    
    <div ref="whiteFlash" class="absolute inset-0 z-20 bg-orange-50 mix-blend-normal opacity-0 pointer-events-none"></div>

    <div ref="heroContent" class="relative z-30 text-center px-4 max-w-5xl mt-[-10vh]">
      
      <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 backdrop-blur-xl border border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)] mb-8 hover:scale-105 transition-transform">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
        <span class="font-bold text-orange-100 text-sm tracking-wider uppercase font-mono">YOUR DIGITAL GROWTH PARTNER</span>
      </div>

      <h1 class="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-8 drop-shadow-2xl">
          We Build Tech. <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 animate-gradient-x">
          We Create Hype.
        </span>
      </h1>

      <p class="text-xl md:text-2xl text-orange-100/90 font-medium max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
        Stop juggling 5 different agencies. We handle your Development, Branding, and Content Production under one roof. Sit back, we got this.
      </p>

      <div>
        <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-bold focus:outline-none">
          <span class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F97316_0%,#FBBF24_50%,#F97316_100%)]"></span>
          <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-10 py-4 text-lg text-orange-100 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white backdrop-blur-3xl">
            Let’s Collaborate
          </span>
        </button>
      </div>

    </div>
    
    <div ref="scrollHint" class="absolute bottom-10 flex flex-col items-center gap-2 text-orange-300/70 text-sm font-bold tracking-widest animate-bounce z-30">
      <p>SCROLL TO ENTER</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import gambar
import portalImage from '@/assets/images/image_4.jpg' 

gsap.registerPlugin(ScrollTrigger)

const heroSection = ref(null)
const portalContainer = ref(null)
const portalImageEl = ref(null) // Ref baru untuk elemen img langsung
const heroContent = ref(null)
const orangeOverlay = ref(null)
const whiteFlash = ref(null) // Ref baru untuk flash putih
const scrollHint = ref(null)

// Helper untuk posisi random Fireflies
const getFireflyStyle = (i) => {
  const size = Math.random() * 6 + 2 + 'px' // Ukuran 2px - 8px
  return {
    width: size,
    height: size,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDelay: Math.random() * 5 + 's', // Delay random biar gak barengan
    animationDuration: Math.random() * 10 + 5 + 's', // Durasi 5s - 15s
    opacity: Math.random() * 0.7 + 0.3
  }
}

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top top",
        // UPDATE: Dikurangi jadi 1500 agar scroll lebih cepat selesai
        end: "+=1500", 
        scrub: 1, // Sedikit lebih responsif (sebelumnya mungkin terlalu delay)
        pin: true,
        anticipatePin: 1,
      }
    })

    // --- ZOOM ANIMATION (Dengan Blur Trick) ---
    tl.to(portalContainer.value, {
      scale: 25, // UPDATE: Scale dikurangi sedikit (dari 40 ke 25) biar gak terlalu pecah parah
      ease: "power2.inOut",
    }, 0)

    // NEW: Tambahkan efek Blur saat di-zoom agar pixelation tersamar
    tl.to(portalImageEl.value, {
      filter: "blur(20px)", // Gambar jadi buram saat membesar
      ease: "power1.in",
    }, 0)

    // --- TEXT FADE OUT ---
    tl.to([heroContent.value, scrollHint.value], {
      opacity: 0,
      y: -100,
      scale: 0.9,
      ease: "power1.in",
      duration: 0.4 
    }, 0)

    // --- OVERLAYS (Penutup Pixel) ---
    // Overlay orange muncul lebih awal
    tl.to(orangeOverlay.value, {
      opacity: 0.9, 
      ease: "power2.in",
    }, 0.2) // Mulai di 20% scroll

    // Flash putih/terang di akhir untuk transisi total ke section berikutnya
    // Ini benar-benar menutupi gambar yang pecah di akhir zoom
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

/* ANIMASI FIREFLIES (Floating Particles) */
@keyframes floatUp {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  20% { opacity: 1; }
  50% { transform: translateY(-50px) translateX(20px); opacity: 0.8; }
  80% { opacity: 1; }
  100% { transform: translateY(-100px) translateX(-20px); opacity: 0; }
}

.firefly {
  /* Box shadow biar ada efek glow/bersinar */
  box-shadow: 0 0 10px 2px rgba(253, 186, 116, 0.8); 
  animation: floatUp linear infinite;
}
</style>