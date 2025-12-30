<template>
  <section class="bg-black text-white py-24 rounded-t-[4rem] relative z-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative group">
          <div class="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-80 transition duration-700"></div>
          <div class="relative h-[500px] w-full bg-gray-900 rounded-[2rem] overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
            <div class="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl">
              <p class="text-3xl font-black text-orange-500">20+</p>
              <p class="text-xs text-gray-300 uppercase tracking-widest">Global Clients</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Born in The Cloud, <br>
            <span class="text-transparent stroke-text-white">Raised by Internet.</span>
          </h2>
          
          <div class="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
            <p>Gretiva started as a rebellion against stiff, corporate IT solutions...</p>
            <p>Today, we act as your <b>Digital Special Forces</b>...</p>
          </div>

          <div>
            <h4 class="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Core Capabilities</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="tag in capabilities" :key="tag" class="px-4 py-2 rounded-full border border-white/20 text-sm font-bold hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all cursor-default">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = ["Web Development", "Mobile Apps", "Web3 Integration", "UI/UX Design", "Brand Identity", "Social Media", "Motion Graphics", "Consultancy"]
</script>

<style scoped>
/* CSS WAJIB AGAR EFFECT TEXT MUNCUL */
.stroke-text-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5); /* Garis Putih */
  color: transparent;
}
</style>