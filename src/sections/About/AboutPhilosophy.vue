<template>
  <section ref="philosophySection" class="bg-[#FFF8F3] flex flex-col justify-center py-24 rounded-t-[4rem] -my-12 relative z-20 overflow-hidden">
    
    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16 philo-header opacity-0">
        <span class="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-100 px-4 py-1 rounded-full">
          Our Core DNA
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 mt-6 tracking-tight">
          The Gretiva Way
        </h2>
        <p class="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
          Tiga pilar utama yang menjadi pondasi kami dalam berkarya dan memberikan dampak.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <article class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Sprout icon">
            🌱
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Grow</h3>
          <p class="text-gray-500 leading-relaxed">
            Semangat berkembang secara berkelanjutan. Bagi kami, tumbuh bukan sekadar menjadi besar, tapi memperluas dampak positif bagi teknologi, tim, dan masyarakat.
          </p>
        </article>

        <article class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Palette icon">
            🎨
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Creative</h3>
          <p class="text-gray-500 leading-relaxed">
            Kunci solusi yang unik dan efektif. Kami berpikir <i>out-of-the-box</i> untuk menghadirkan karya yang berbeda, menarik, dan menolak standar yang membosankan.
          </p>
        </article>

        <article class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Rocket icon">
            🚀
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Innovation</h3>
          <p class="text-gray-500 leading-relaxed">
            Dorongan untuk selalu menciptakan hal baru. Kami beradaptasi dengan zaman dan menjadi pelopor teknologi untuk memastikan bisnis Anda siap menghadapi masa depan.
          </p>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const philosophySection = ref(null)
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophySection.value,
        start: "top 75%", // Sedikit lebih awal agar user tidak menunggu lama
        toggleActions: "play none none reverse"
      }
    })

    // 1. Animasi Header
    tl.fromTo(".philo-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    // 2. Animasi Cards
    tl.fromTo(".philo-card", 
      { y: 100, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }, 
      "-=0.4"
    )

  }, philosophySection.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>