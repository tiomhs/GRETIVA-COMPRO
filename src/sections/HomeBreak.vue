<template>
  <section class="relative w-full py-16 overflow-hidden bg-[#00C49A] flex flex-col justify-center items-center min-h-[500px]">
    
    <div class="absolute inset-0 flex flex-col justify-center gap-2 opacity-40 select-none pointer-events-none">
      
      <div 
        v-for="i in 7" 
        :key="i"
        class="flex whitespace-nowrap overflow-hidden"
      >
        <div 
          class="flex gap-4 items-center text-4xl md:text-6xl font-black text-[#E0F7F0] uppercase tracking-tighter"
          :class="i % 2 === 0 ? 'animate-marquee-reverse' : 'animate-marquee'"
        >
          <span v-for="j in 4" :key="j" class="flex items-center gap-4">
            <span>FOR PERPETUAL DEXES</span>
            <span class="text-2xl">•</span>
            <span>FOR AIRDROP CAMPAIGNS</span>
            <span class="text-2xl">•</span>
            <span>FOR NFT MINTS</span>
            <span class="text-2xl">•</span>
            <span>FOR CREDIT PROTOCOLS</span>
            <span class="text-2xl">•</span>
          </span>
        </div>
      </div>

    </div>

    <div class="relative z-10">
      <button class="bg-white text-[#00C49A] text-lg font-bold px-10 py-4 rounded-full shadow-2xl hover:scale-105 hover:shadow-white/20 transition-transform duration-300">
        Get in Touch
      </button>
    </div>

  </section>
</template>

<script setup>
// Logic animasi ada di CSS bawah
</script>

<style scoped>
/* Definisi Animasi Marquee */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); } 
  /* -25% karena kita merender konten 4 kali lipat. 
     Saat mencapai 25% (satu set konten), dia reset ke 0% tanpa terlihat mata */
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  animation: marquee 30s linear infinite reverse;
}
</style>