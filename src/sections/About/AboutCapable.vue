<template>
  <section class="bg-black text-white py-24 rounded-t-[4rem] relative z-10 overflow-hidden">
    
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div class="lg:col-span-5 relative group order-2 lg:order-1 lg:sticky lg:top-32 h-fit">
          <div class="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-80 transition duration-700"></div>
          
          <div class="relative aspect-[4/5] w-full bg-gray-900 rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
              alt="Gretiva Team collaborating"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div class="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl">
              <p class="text-3xl font-black text-orange-500">End-to-End</p>
              <p class="text-xs text-gray-300 uppercase tracking-widest">Integrated Ecosystem</p>
            </div>
          </div>

          <div class="mt-8 flex justify-between border-t border-white/10 pt-6">
            <div>
              <h4 class="text-2xl font-bold text-white">15+</h4>
              <p class="text-xs text-gray-400">Services</p>
            </div>
            <div>
              <h4 class="text-2xl font-bold text-white">3</h4>
              <p class="text-xs text-gray-400">Core Divisions</p>
            </div>
            <div>
              <h4 class="text-2xl font-bold text-white">100%</h4>
              <p class="text-xs text-gray-400">Integrated</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 order-1 lg:order-2">
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Beyond Digital Code, <br>
            <span class="text-transparent stroke-text-white">Into Physical Reality.</span>
          </h2>
          
          <div class="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed mb-12">
            <p>
              <strong>Gretiva Artha Group</strong> menghapus batasan antara dunia maya dan nyata. Kami memahami bahwa dominasi pasar membutuhkan integrasi sempurna—mulai dari sistem <i>software</i> berkinerja tinggi hingga infrastruktur fisik yang ikonik.
            </p>
            <p>
              Kami adalah <b class="text-white">The Master Builders</b>. Baik itu merancang sistem IoT kompleks, strategi branding viral, atau membangun kantor pusat perusahaan Anda dari nol. Satu visi, satu partner, eksekusi tanpa celah.
            </p>
          </div>

          <div class="space-y-10">
            
            <div v-for="(group, gIndex) in capabilities" :key="gIndex">
              
              <div class="flex items-center gap-3 mb-5 border-b border-white/10 pb-2">
                <div class="h-2 w-2 rounded-full" :class="group.bgDotClass"></div>
                <h4 class="text-sm font-bold uppercase tracking-widest text-white">
                  {{ group.category }}
                </h4>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                <div 
                  v-for="(item, iIndex) in group.items" 
                  :key="iIndex"
                  class="group/item flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 cursor-default"
                >
                  <div class="w-8 h-8 rounded bg-black flex items-center justify-center text-base group-hover/item:scale-110 transition-transform shadow-inner border border-white/5 shrink-0">
                    {{ item.icon }}
                  </div>
                  
                  <div class="min-w-0">
                    <span class="text-xs font-bold text-gray-300 group-hover/item:text-white transition-colors truncate block">
                      {{ item.name }}
                    </span>
                  </div>
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
  {
    category: "Technology & Digital",
    bgDotClass: "bg-blue-500", 
    items: [
      { name: "Web & Apps Dev", icon: "💻" },
      { name: "IoT Solutions", icon: "📡" }
    ]
  },
  {
    category: "Creative & Design",
    bgDotClass: "bg-orange-500",
    items: [
      { name: "Social Media Mgt", icon: "🔥" },
      { name: "Branding & Design", icon: "🎨" },
      { name: "Creative Studio", icon: "📸" },
      { name: "3D Visualization", icon: "🧊" }
    ]
  },
  {
    category: "Architecture & Construction",
    bgDotClass: "bg-yellow-500",
    items: [
      { name: "Arsitektur & Design", icon: "🏛️" },
      { name: "Interior Design", icon: "🛋️" },
      { name: "Structure Works", icon: "🏗️" },
      { name: "General Contractor", icon: "👷" },
      { name: "MEP Engineering", icon: "⚡" },
      { name: "Civils & Infra", icon: "🛣️" },
      { name: "Landscaping", icon: "🌿" },
      { name: "Refurbishment", icon: "🏢" },
      { name: "Renovation", icon: "🔨" }
    ]
  }
]
</script>

<style scoped>
.stroke-text-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  color: transparent;
}
</style>