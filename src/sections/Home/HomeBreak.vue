<template>
  <section class="relative pt-32 pb-20 bg-black text-white overflow-hidden rounded-t-[4rem] -mt-12 z-20">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="absolute left-[10%] top-[20%] text-6xl animate-float-slow opacity-80">🚀</div>
    <div class="absolute right-[15%] bottom-[30%] text-6xl animate-float-delayed opacity-80">🔥</div>
    <div class="absolute right-[5%] top-[10%] w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-sm animate-pulse-slow opacity-50"></div>


    <div class="container mx-auto px-6 relative z-10 text-center">
      
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          ● Let's Cook
        </div>
        <h2 class="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
          Ready to spark some <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 animate-gradient-x">
            Digital Magic?
          </span>
        </h2>
        <p class="text-xl text-gray-400 max-w-xl mx-auto">
          Got a crazy idea? A boring project that needs spice? Drop us a line. We don't do mediocre.
        </p>
      </div>

      <div class="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-[3rem] shadow-[0_0_50px_rgba(249,115,22,0.1)] transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_80px_rgba(249,115,22,0.2)] group">
        
        <form class="flex flex-col gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Your Name" 
                class="w-full bg-black/20 border border-white/10 rounded-full px-8 py-5 text-lg font-medium focus:outline-none focus:border-orange-400 focus:bg-black/40 transition-all placeholder:text-gray-500"
              />
            </div>
            <div class="relative">
              <input 
                type="email" 
                placeholder="Your Email Addres" 
                class="w-full bg-black/20 border border-white/10 rounded-full px-8 py-5 text-lg font-medium focus:outline-none focus:border-orange-400 focus:bg-black/40 transition-all placeholder:text-gray-500"
              />
            </div>
          </div>

          <div class="relative">
            <textarea 
              rows="4"
              placeholder="Tell us about your project idea (don't be shy!)" 
              class="w-full bg-black/20 border border-white/10 rounded-[2rem] px-8 py-5 text-lg font-medium focus:outline-none focus:border-orange-400 focus:bg-black/40 transition-all resize-none placeholder:text-gray-500"
            ></textarea>
          </div>

          <button class="relative group/btn overflow-hidden w-full bg-orange-500 text-white rounded-full py-6 text-2xl font-black tracking-wide shadow-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/40">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
            <span class="relative flex items-center justify-center gap-3 z-10">
              LAUNCH PROJECT 🚀
            </span>
          </button>
        </form>

      </div>

      <div class="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 font-medium">
        <p>Or slide into our DMs:</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-orange-400 transition-colors flex items-center gap-2">
            <span class="text-xl">📸</span> Instagram
          </a>
          <a href="#" class="hover:text-orange-400 transition-colors flex items-center gap-2">
            <span class="text-xl">💼</span> LinkedIn
          </a>
          <a href="#" class="hover:text-orange-400 transition-colors flex items-center gap-2">
            <span class="text-xl">📧</span> hello@gretiva.com
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ANIMASI FLOATING EMOJI */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}
.animate-float-slow {
  animation: floatSlow 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatSlow 7s ease-in-out infinite;
  animation-delay: 1s;
}

/* ANIMASI PULSE GLOW */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; scale: 1; }
  50% { opacity: 0.6; scale: 1.1; }
}
.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

/* ANIMASI GRADIENT TEXT */
@keyframes gradient-x {
  0%, 100% { background-position: left center; background-size: 200% 200%; }
  50% { background-position: right center; background-size: 200% 200%; }
}
.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>