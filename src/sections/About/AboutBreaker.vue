<template>
  <section 
    @mousemove="handleMouseMove" 
    class="bg-black py-32 rounded-t-[4rem] -mt-12 relative z-30 flex items-center justify-center overflow-hidden group cursor-none"
    aria-label="Gretiva Philosophy Quote"
  >
    
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black"></div>

    <div 
      ref="cursorGlow"
      class="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 mix-blend-screen top-0 left-0"
    ></div>

    <div aria-hidden="true" class="absolute top-[20%] left-[10%] text-6xl animate-float-slow opacity-60 rotate-12 pointer-events-none">⚡</div>
    <div aria-hidden="true" class="absolute bottom-[20%] right-[10%] text-6xl animate-float-delayed opacity-60 -rotate-12 pointer-events-none">🏗️</div>
    <div aria-hidden="true" class="absolute top-[15%] right-[20%] w-4 h-4 rounded-full bg-blue-500 blur-[2px] animate-pulse pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      
      <div 
        aria-hidden="true"
        class="text-[15vw] md:text-[20vw] font-black text-white leading-none tracking-tighter opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full scale-150 pointer-events-none"
      >
        LEGACY
      </div>
      
      <figure class="relative z-10">
        <blockquote class="text-3xl md:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto mb-8 relative">
          <span aria-hidden="true" class="absolute -top-8 -left-4 text-6xl text-orange-500 opacity-50 font-serif">“</span>
          
          We don't just write code. <br>
          We build the
          
          <span class="relative inline-block mx-2">
            <span class="relative z-10 text-orange-500">Bridge</span>
            
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-orange-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </span> 
          
          between digital dreams <br class="hidden md:block" /> and physical reality.
        </blockquote>
        
        <figcaption class="text-gray-500 font-mono tracking-widest uppercase flex items-center justify-center gap-4 text-sm md:text-base">
          <span class="w-8 h-[1px] bg-gray-700"></span>
          The Gretiva Philosophy
          <span class="w-8 h-[1px] bg-gray-700"></span>
        </figcaption>
      </figure>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const cursorGlow = ref(null)
let xTo, yTo

// Logic untuk cursor glow mengikuti mouse dengan smooth (GSAP QuickTo)
const glowSize = 400 
const glowOffset = glowSize / 2 

onMounted(() => {
  xTo = gsap.quickTo(cursorGlow.value, "x", { duration: 0.2, ease: "power2.out" })
  yTo = gsap.quickTo(cursorGlow.value, "y", { duration: 0.2, ease: "power2.out" })
})

const handleMouseMove = (e) => {
  if (!cursorGlow.value) return

  const rect = e.currentTarget.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  xTo(mouseX - glowOffset)
  yTo(mouseY - glowOffset)
}
</script>

<style scoped>
/* ANIMASI DEKORASI */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(12deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(0) rotate(-12deg); }
  50% { transform: translateY(20px) rotate(-15deg); }
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatReverse 7s ease-in-out infinite;
  animation-delay: 1s;
}
</style>