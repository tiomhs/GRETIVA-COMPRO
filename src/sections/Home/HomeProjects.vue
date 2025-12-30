<template>
  <section class="relative py-32 bg-[#FFF8F3]" id="projects">
    
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        <div class="lg:col-span-5 sticky top-32 h-fit z-10 hidden lg:block">
          
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            ● Selected Works
          </div>

          <h2 class="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] mb-8">
            Stuff We <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Shipped.
            </span>
          </h2>

          <p class="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-md">
            We don't just build software; we craft digital legacies. Here are some of our favorite babies that make money.
          </p>

          <button class="group flex items-center gap-4 text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors">
            <span class="w-14 h-14 rounded-full border-2 border-gray-900 group-hover:border-orange-600 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            View All Projects
          </button>
        </div>

        <div class="lg:hidden col-span-1 mb-8">
          <h2 class="text-5xl font-black text-gray-900 leading-[0.9]">
            Stuff We Shipped.
          </h2>
        </div>


        <div class="lg:col-span-7 flex flex-col gap-16 md:gap-24 w-full">
          
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            class="project-card group relative bg-white rounded-[3rem] p-4 md:p-5 border border-orange-100 shadow-xl shadow-orange-900/5 hover:shadow-orange-500/20 transition-all duration-500"
          >
            <div class="relative h-[320px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden mb-8 bg-gray-100">
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500 pointer-events-none"></div>
              
              <img 
                :src="project.image" 
                :alt="project.title"
                class="project-image w-full h-[120%] object-cover object-center transform will-change-transform"
              />

              <div class="absolute top-6 left-6 z-20">
                <span class="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide border border-white/50 shadow-sm">
                  {{ project.category }}
                </span>
              </div>
            </div>

            <div class="px-4 pb-4 md:px-6 md:pb-6 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-gray-500 font-medium max-w-xs leading-snug">
                  {{ project.desc }}
                </p>
              </div>

              <button class="w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg">
                See Case Study
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import projects from '@/data/project.js'
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    // 1. Image Parallax (Gambar gerak lambat di dalam kartu)
    const images = gsap.utils.toArray(".project-image")
    images.forEach((img) => {
      gsap.to(img, {
        y: "-20%", 
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true, 
        }
      })
    })

  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>