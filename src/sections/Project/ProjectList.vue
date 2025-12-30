<template>
  <section class="container mx-auto px-6 pb-32">
    
    <div class="flex flex-wrap gap-3 mb-12">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        class="px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 transform hover:scale-105"
        :class="activeCategory === cat 
          ? 'bg-black text-white border-black shadow-lg scale-105' 
          : 'bg-white text-gray-500 border-gray-200 hover:border-orange-500 hover:text-orange-500'"
      >
        {{ cat }}
      </button>
    </div>

    <TransitionGroup 
      name="list" 
      tag="div" 
      class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative"
    >
      
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group relative bg-white rounded-[2.5rem] p-4 border border-orange-100 shadow-xl shadow-orange-500/5 hover:shadow-orange-500/15 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      >
        <div class="relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden bg-gray-100 mb-6 shrink-0">
          
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
            <a 
              :href="project.link" 
              target="_blank"
              class="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-110 transition-transform flex items-center gap-2"
            >
              View Project ↗
            </a>
          </div>

          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />

          <div class="absolute top-4 left-4 z-10">
            <span class="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wide border border-white shadow-sm">
              {{ project.category }}
            </span>
          </div>
        </div>

        <div class="px-2 md:px-4 pb-4 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-3xl font-black text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">
              {{ project.title }}
            </h3>
            <span class="w-10 h-10 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all group-hover:-rotate-45">
              →
            </span>
          </div>
          <p class="text-gray-500 font-medium leading-relaxed">
            {{ project.desc }}
          </p>
        </div>
      </div>

      <div 
        key="cta-card"
        class="group relative bg-black rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center overflow-hidden border border-gray-800 min-h-[450px]"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-purple-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] animate-pulse"></div>

        <div class="relative z-10">
          <h3 class="text-4xl font-black text-white mb-4">
            Your Project <br> 
            <span class="text-orange-500">Next?</span>
          </h3>
          <p class="text-gray-400 mb-8 max-w-xs mx-auto leading-relaxed">
            Ready to build something legendary? Let's add your brand to our hall of fame.
          </p>
          <a href="#contact" class="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-lg shadow-white/10">
            Start a Project 🚀
          </a>
        </div>
      </div>

    </TransitionGroup>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import projects from '@/data/AllProject.js'

const categories = ['All', 'Web Dev', 'Mobile App', 'Branding', 'UI/UX']
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})
</script>

<style scoped>
/* Transisi Halus untuk Grid */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* KUNCI: Biar element yang hilang (leave) tidak menggeser layout saat animasi */
.list-leave-active {
  position: absolute; 
  /* Tapi di grid responsive kadang 'absolute' bikin layout aneh. 
     Trik paling aman untuk grid list filter sederhana adalah display:none untuk leave. */
  display: none; 
}
</style>