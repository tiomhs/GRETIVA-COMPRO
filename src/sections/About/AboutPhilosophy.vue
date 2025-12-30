<template>
  <section ref="philosophySection" class="bg-[#FFF8F3] flex flex-col justify-center py-24 rounded-t-[4rem] -my-12 -pb-22 relative z-20 overflow-hidden">
    
    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16 philo-header opacity-0">
        <span class="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-100 px-4 py-1 rounded-full">
          Our DNA
        </span>
        <h2 class="text-5xl md:text-7xl font-black text-gray-900 mt-6 tracking-tight">
          The Gretiva Way
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">🦄</div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Be A Rebel</h3>
          <p class="text-gray-500 leading-relaxed">Don't follow trends, create them. We hate "normal". Normal doesn't sell.</p>
        </div>

        <div class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Speed Matters</h3>
          <p class="text-gray-500 leading-relaxed">In the digital world, slow means dead. We ship fast without breaking things.</p>
        </div>

        <div class="philo-card opacity-0 bg-white p-10 rounded-[2.5rem] border border-orange-100 shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-300 group">
          <div class="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">🤝</div>
          <h3 class="text-2xl font-black text-gray-900 mb-3">Human First</h3>
          <p class="text-gray-500 leading-relaxed">We build tech for humans, not robots. Empathy is our best coding language.</p>
        </div>

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
        start: "top 60%", // Animasi mulai saat bagian atas section mencapai 60% viewport
        toggleActions: "play none none reverse" // Jika scroll balik ke atas, animasi mundur (reverse)
      }
    })

    // 1. Animasi Header (Fade Up)
    tl.fromTo(".philo-header", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    // 2. Animasi Cards (Stagger + Bounce)
    // 'stagger: 0.2' artinya kartu muncul gantian dengan jeda 0.2 detik
    // 'back.out(1.7)' memberikan efek memantul sedikit saat muncul (playful effect)
    tl.fromTo(".philo-card", 
      { y: 100, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }, 
      "-=0.4" // Mulai sedikit lebih awal sebelum animasi header selesai
    )

  }, philosophySection.value)
})

onUnmounted(() => {
  ctx.revert() // Cleanup GSAP
})
</script>