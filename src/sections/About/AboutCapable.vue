<template>
  <section class="bg-black text-white py-24 rounded-t-[4rem] relative z-10 overflow-hidden">
    
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
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
            <p>Gretiva started as a rebellion against stiff, corporate IT solutions. We realized that modern businesses need speed, aesthetics, and hype—not just code.</p>
            <p>Today, we act as your <b>Digital Special Forces</b>. We swoop in, fix your chaos, launch your product, and make it look sexy.</p>
          </div>

          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-[1px] w-8 bg-orange-500"></div>
              <h4 class="text-sm font-bold text-orange-500 uppercase tracking-widest">System Modules</h4>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-2 gap-3">
              <div 
                v-for="(item, index) in capabilities" 
                :key="index"
                class="group flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-default"
              >
                <div class="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                  {{ item.icon }}
                </div>
                
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                    {{ item.name }}
                  </span>
                  <div class="h-[2px] w-0 bg-orange-500 mt-1 group-hover:w-full transition-all duration-500"></div>
                </div>

                <div class="ml-auto w-2 h-2 rounded-full bg-gray-700 group-hover:bg-orange-500 group-hover:shadow-[0_0_8px_orange] transition-all"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Saya tambahkan Icon/Emoji agar lebih visual
const capabilities = [
  { name: "Web Development", icon: "💻" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "Web3 Integration", icon: "⛓️" },
  { name: "UI/UX Design", icon: "🎨" },
  { name: "Brand Identity", icon: "✨" },
  { name: "Social Media", icon: "🔥" },
  { name: "Motion Graphics", icon: "🎬" },
  { name: "Consultancy", icon: "💡" }
]
</script>

<style scoped>
.stroke-text-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  color: transparent;
}
</style>