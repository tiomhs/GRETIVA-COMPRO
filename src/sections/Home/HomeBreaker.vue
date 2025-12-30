<template>
  <section class="relative py-24 md:py-32 bg-black overflow-hidden flex flex-col justify-center items-center">
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-r from-orange-600/30 to-purple-600/30 rounded-full blur-[60px] md:blur-[100px] animate-pulse-slow pointer-events-none"></div>

    <div class="absolute inset-0 pointer-events-none">
      <div 
        v-for="n in 15" 
        :key="n"
        class="absolute rounded-full bg-orange-200 mix-blend-screen animate-float-particle"
        :style="getParticleStyle()"
      ></div>
    </div>

    <div class="relative z-10 transform -rotate-2 scale-100 md:scale-110 mix-blend-lighten">
      
      <div class="border-y border-white/10 bg-white/5 backdrop-blur-sm py-3 md:py-4 mb-4 md:mb-6">
        <div class="flex whitespace-nowrap animate-marquee">
          <div v-for="i in 4" :key="i" class="flex items-center gap-6 md:gap-12 mx-4 md:mx-6">
            
            <span class="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter">
              GRETIVA GROUP
            </span>
            
            <span class="text-2xl md:text-4xl animate-spin-slow">✨</span> 
            
            <span class="text-4xl md:text-6xl lg:text-8xl font-black text-transparent stroke-text-white tracking-tighter">
              NO BORING TECH ALLOWED
            </span>
            
            <span class="text-2xl md:text-4xl animate-bounce">🍊</span> 
          
          </div>
        </div>
      </div>

      <div class="border-y border-white/10 bg-orange-900/10 backdrop-blur-sm py-3 md:py-4">
        <div class="flex whitespace-nowrap animate-marquee-reverse">
          <div v-for="i in 4" :key="i" class="flex items-center gap-6 md:gap-12 mx-4 md:mx-6">
            
            <span class="text-4xl md:text-6xl lg:text-8xl font-black text-transparent stroke-text-orange tracking-tighter">
              YOUR DIGITAL MVP
            </span>
            
            <span class="w-2 h-2 md:w-4 md:h-4 rounded-full bg-orange-500 shadow-[0_0_10px_orange]"></span>
            
            <span class="text-4xl md:text-6xl lg:text-8xl font-black text-orange-500 tracking-tighter">
              GRETIVA GROUP
            </span>
            
            <span class="w-2 h-2 md:w-4 md:h-4 rounded-full bg-orange-500 shadow-[0_0_10px_orange]"></span>
          
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
const getParticleStyle = () => {
  const size = Math.random() * 4 + 2 + 'px'
  return {
    width: size,
    height: size,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    opacity: Math.random() * 0.5 + 0.2,
    animationDuration: Math.random() * 10 + 10 + 's',
    animationDelay: Math.random() * 5 + 's'
  }
}
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee { animation: marquee 25s linear infinite; }
.animate-marquee-reverse { animation: marquee-reverse 25s linear infinite; }

@keyframes floatParticle {
  0%, 100% { transform: translate(0, 0); opacity: 0.2; }
  50% { transform: translate(20px, -50px); opacity: 0.8; }
}
.animate-float-particle {
  animation: floatParticle linear infinite;
}

@keyframes pulseSlow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}
.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

/* Responsive Stroke Width: Lebih tipis di mobile biar kebaca */
.stroke-text-white { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3); }
.stroke-text-orange { -webkit-text-stroke: 1px #f97316; }

@media (max-width: 768px) {
  .stroke-text-white { -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.5); }
  .stroke-text-orange { -webkit-text-stroke: 0.5px #f97316; }
}

.animate-spin-slow { animation: spin 5s linear infinite; }
</style>