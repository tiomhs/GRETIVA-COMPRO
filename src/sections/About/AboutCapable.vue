<template>
  <section class="bg-black text-white py-24 rounded-t-[4rem] relative z-10 overflow-hidden">
    
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative group order-2 lg:order-1">
          <div class="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-80 transition duration-700"></div>
          <div class="relative h-[550px] w-full bg-gray-900 rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
              alt="Gretiva Team collaborating on digital and architectural projects"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div class="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl">
              <p class="text-3xl font-black text-orange-500">One-Stop</p>
              <p class="text-xs text-gray-300 uppercase tracking-widest">Ecosystem Solution</p>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <h2 class="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Beyond Digital Code, <br>
            <span class="text-transparent stroke-text-white">Into Physical Reality.</span>
          </h2>
          
          <div class="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            <p>
              <strong>Gretiva Artha Group</strong> menghapus batasan antara dunia maya dan nyata. Kami memahami bahwa dominasi pasar membutuhkan integrasi sempurna—mulai dari sistem <i>software</i> berkinerja tinggi hingga infrastruktur fisik yang ikonik.
            </p>
            <p>
              Kami adalah <b class="text-white">The Master Builders</b>. Baik itu merancang sistem IoT kompleks, strategi branding viral, atau membangun kantor pusat perusahaan Anda dari nol. Satu visi, satu partner, eksekusi tanpa celah.
            </p>
          </div>

          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-[1px] w-8 bg-orange-500"></div>
              <h4 class="text-xs md:text-sm font-bold text-orange-500 uppercase tracking-widest">
                Our Capabilities (10 Modules)
              </h4>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                v-for="(item, index) in capabilities" 
                :key="index"
                class="group flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-default"
              >
                <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-black flex items-center justify-center text-lg md:text-xl group-hover:scale-110 transition-transform shadow-inner border border-white/5 shrink-0">
                  {{ item.icon }}
                </div>
                
                <div class="flex flex-col flex-1 min-w-0">
                  <span class="text-xs md:text-sm font-bold text-gray-300 group-hover:text-white transition-colors truncate">
                    {{ item.name }}
                  </span>
                  <div class="h-[1px] w-0 bg-orange-500 mt-1 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = [
  { name: "Web & Apps Dev", icon: "💻" },
  { name: "IoT Solutions", icon: "📡" },
  { name: "Social Media Mgt", icon: "🔥" },
  { name: "Branding & Design", icon: "🎨" },
  { name: "Architecture", icon: "🏛️" }, 
  { name: "Interior Design", icon: "🛋️" }, 
  { name: "Creative Studio", icon: "📸" }, 
  { name: "3D Visualization", icon: "🧊" }, 
  { name: "General Contractor", icon: "🏗️" }, 
  { name: "MEP Engineering", icon: "⚡" } 
]
</script>

<style scoped>
.stroke-text-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  color: transparent;
}
</style>