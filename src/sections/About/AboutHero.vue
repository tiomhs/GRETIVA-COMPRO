<template>
  <section class="container mx-auto px-6 mt-32 md:mt-48 mb-20 md:mb-32 relative">
    
    <div class="absolute inset-0 -z-20 opacity-30 pointer-events-none" 
         style="background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 24px 24px;">
    </div>
    
    <div class="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-[120px] opacity-40 -z-10 animate-pulse-slow"></div>

    <div class="absolute top-0 right-[10%] text-6xl md:text-8xl animate-float opacity-80 rotate-12 -z-10">
      ✴️
    </div>

    <div class="max-w-5xl relative">
      
      <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-lg shadow-orange-500/5 mb-8 hover:scale-105 transition-transform cursor-default">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </span>
        <span class="text-xs font-bold text-gray-900 tracking-widest uppercase">Est. 2024 • The New Wave</span>
      </div>
      
      <h1 class="text-7xl md:text-[9rem] font-black text-gray-900 leading-[0.85] mb-10 tracking-tighter relative z-10">
        Not Just <br/>
        
        <span class="relative inline-block">
          
          <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] text-orange-500 opacity-20 -z-10" viewBox="0 0 300 100" preserveAspectRatio="none">
            <path d="M5,50 Q150,5 295,50 T5,50" stroke="currentColor" stroke-width="8" fill="none" />
            <path d="M5,50 Q150,95 295,50" stroke="currentColor" stroke-width="4" fill="none" opacity="0.5" />
          </svg>

          <span class="text-transparent stroke-text-black hover:text-black transition-colors duration-500 cursor-none">
            Another Agency.
          </span>

          <span class="absolute -top-4 -right-8 text-4xl text-orange-500 animate-spin-slow">✻</span>
        </span>
      </h1>
      
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <div class="hidden md:block w-1.5 h-32 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
        
        <p class="text-xl md:text-3xl text-gray-600 font-medium leading-normal max-w-3xl">
          We are a <span class="bg-orange-100 px-2 text-orange-800 italic">digital playground</span> where logic meets magic. 
          Gretiva is built for brands that refuse to be <span class="line-through decoration-orange-500 decoration-4">boring</span> ordinary.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* TEKS OUTLINE HITAM */
.stroke-text-black {
  -webkit-text-stroke: 2px #111;
  /* color: transparent; (Sudah ada di class tailwind) */
}

/* RESPONSIVE STROKE */
@media (max-width: 768px) {
  .stroke-text-black {
    -webkit-text-stroke: 1px #111;
  }
}

/* ANIMASI FLOAT & SPIN */
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
</style>