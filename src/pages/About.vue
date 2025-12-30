<template>
  <main class="bg-white pt-24 md:pt-32">
    
    <section class="container mx-auto px-6 mb-24 md:mb-32">
      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-8">
          ● Who We Are
        </div>
        
        <h1 ref="manifestoTitle" class="text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tight">
          We are the <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Rebels of Tech.
          </span>
        </h1>
        
        <p ref="manifestoText" class="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
          Gretiva lahir karena kami bosan dengan solusi digital yang "B aja". 
          Kami percaya teknologi harus punya jiwa, seni, dan sedikit kenakalan.
          <br><br>
          Kita tidak cuma nulis kode, kita menulis masa depan brand kamu.
        </p>
      </div>
    </section>

    <section class="bg-black text-white py-24 overflow-hidden rounded-[3rem] mx-2 md:mx-6 mb-24 relative">
      
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div class="relative group">
          <div class="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Gretiva Team" 
            class="relative rounded-[2rem] w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-y-12 gap-x-8">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item">
            <h3 class="text-6xl md:text-7xl font-black text-white mb-2">
              <span class="counter" :data-target="stat.value">0</span>{{ stat.suffix }}
            </h3>
            <p class="text-gray-400 font-medium uppercase tracking-wider text-sm border-t border-white/20 pt-4 inline-block">
              {{ stat.label }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="container mx-auto px-6 mb-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">The Wizards 🧙‍♂️</h2>
        <p class="text-gray-500">Otak di balik kekacauan yang indah ini.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in team" 
          :key="index" 
          class="group relative bg-[#FFF8F3] rounded-[2.5rem] p-4 hover:-translate-y-2 transition-transform duration-300"
        >
          <div class="h-[350px] w-full rounded-[2rem] overflow-hidden mb-6 bg-gray-200 relative">
             <img 
               :src="member.image" 
               :alt="member.name"
               class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
             />
             <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-white">
               {{ member.role }}
             </div>
          </div>
          
          <div class="px-4 pb-4">
            <h3 class="text-2xl font-black text-gray-900 mb-1">{{ member.name }}</h3>
            <p class="text-gray-500 text-sm italic">"{{ member.quote }}"</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-24 overflow-hidden">
      <div class="mb-10 container mx-auto px-6">
        <h2 class="text-4xl font-black text-gray-900">Life at Gretiva 🍊</h2>
      </div>

      <div class="flex gap-6 w-max animate-marquee pl-6">
        <div 
          v-for="img in galleryImages" 
          :key="img"
          class="w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl overflow-hidden shrink-0"
        >
          <img :src="img" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
        </div>
        <div 
          v-for="img in galleryImages" 
          :key="img + 'dup'"
          class="w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl overflow-hidden shrink-0"
        >
          <img :src="img" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// DATA STATS
const stats = [
  { value: 50, suffix: '+', label: 'Projects Shipped' },
  { value: 12, suffix: '', label: 'Awards Won' },
  { value: 98, suffix: '%', label: 'Happy Clients' },
  { value: 900, suffix: 'L', label: 'Coffee Consumed' },
]

// DATA TEAM
const team = [
  {
    name: "Alex",
    role: "Chief Magic Officer",
    quote: "I turn coffee into code.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Sarah",
    role: "Head of Vibes (Creative)",
    quote: "Make it pop, but make it work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Dimas",
    role: "Tech Wizard",
    quote: "It works on my machine.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  }
]

// DATA GALLERY
const galleryImages = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
]


onMounted(() => {
  // 1. ANIMASI HERO FADE UP
  gsap.from("h1 span", { y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 })
  gsap.from("p", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4 })

  // 2. ANIMASI COUNTER (ANGKA BERJALAN)
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target')
    
    gsap.to(counter, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 }, // Biar angkanya bulat (gak desimal)
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%"
      }
    })
  })
})
</script>

<style scoped>
/* ANIMASI MARQUEE (Jalan terus ke kiri) */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Hover pause marquee biar user bisa liat foto */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>