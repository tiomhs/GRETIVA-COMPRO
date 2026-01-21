<template>
  <section class="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-white pb-20 md:pb-32">
    
    <div class="absolute inset-0 -z-20 opacity-30 pointer-events-none" 
         style="background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 24px 24px;">
    </div>
    
    <div class="bg-blob absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-[120px] opacity-0 -z-10 animate-pulse-slow"></div>
    <div class="bg-blob absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-gray-100 rounded-full blur-[100px] opacity-0 -z-10"></div>

    <div class="hero-float absolute top-[15%] right-[15%] text-6xl md:text-8xl animate-float opacity-0 rotate-12 -z-10">
      ✴️
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl">
        
        <div class="hero-badge opacity-0 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-lg shadow-orange-500/5 mb-2 hover:scale-105 transition-transform cursor-default">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span class="text-xs font-bold text-gray-900 tracking-widest uppercase">
            Est. 2022 • Gretiva Artha Group
          </span>
        </div>
        
        <h1 class="text-6xl md:text-[6rem] lg:text-[6rem] font-black text-gray-900 leading-[0.9] tracking-tighter relative z-10 mb-10">
          <div class="overflow-hidden">
            <div class="hero-title translate-y-full">Grow &</div>
          </div>
          <div class="overflow-hidden">
            <div class="hero-title translate-y-full">Creative.</div>
          </div>
          
          <div class="overflow-hidden pt-2">
            <div class="hero-title translate-y-full">
               <span class="relative block md:inline-block md:ml-4">
                  <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] text-orange-500 opacity-20 -z-10" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path d="M5,50 Q150,5 295,50 T5,50" stroke="currentColor" stroke-width="8" fill="none" />
                  </svg>

                  <span class="text-transparent stroke-text-black hover:text-black transition-colors duration-500 cursor-default">
                    Innovation.
                  </span>

                  <span class="absolute -top-2 -right-6 md:-right-12 text-4xl md:text-6xl text-orange-500 animate-spin-slow">✻</span>
                </span>
            </div>
          </div>
        </h1>
        
        <div class="hero-desc opacity-0 flex flex-col md:flex-row gap-8 items-start mt-8">
          <div class="hidden md:block w-1.5 h-24 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
          
          <div class="max-w-4xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              From <span class="text-orange-600">Digital Lines</span> to <span class="text-gray-900 underline decoration-orange-300 decoration-4 underline-offset-4">Physical Spaces.</span>
            </h3>
            <p class="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              We are not just building codes; we are building legacies. 
              Sebuah ekosistem di mana teknologi digital bertemu dengan konstruksi nyata. 
              <span class="text-black font-bold">Grow + Creative + Innovation</span> is our DNA.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

  // 1. Background Blob muncul perlahan
  tl.to(".bg-blob", { opacity: 0.4, duration: 2, stagger: 0.5 })
  
  // 2. Badge Slide Down (Cepat)
    .to(".hero-badge", { y: 0, opacity: 1, duration: 0.8 }, "-=1.5")
    
  // 3. Judul Besar Slide Up (Staggered/Berurutan)
    .to(".hero-title", { 
      y: 0, 
      duration: 1.2, 
      stagger: 0.15 // Jeda antar baris teks
    }, "-=0.5")

  // 4. Deskripsi & Floating Icon Fade Up
    .to([".hero-desc", ".hero-float"], { 
      y: 0, 
      opacity: 0.8, // Float icon opacity 0.8
      duration: 1 
    }, "-=0.8")
    
    // Fix opacity untuk desc agar jadi 1 (karena float cuma 0.8)
    .to(".hero-desc", { opacity: 1, duration: 0.1 }, "<")
})
</script>

<style scoped>
/* TEKS OUTLINE HITAM */
.stroke-text-black {
  -webkit-text-stroke: 2px #111;
}

  @media (max-width: 768px) {
    .stroke-text-black {
      -webkit-text-stroke: 1px #111;
    }
  }

/* ANIMASI EXISTING (CSS) */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-20px) rotate(20deg); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spinSlow 10s linear infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

/* Helper untuk start position GSAP */
.hero-desc {
  transform: translateY(20px);
}
.hero-badge {
  transform: translateY(-20px);
}
</style>