<template>
  <section class="container mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
    
    <div class="mb-8 sm:mb-12">
      <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 bg-gray-50 p-2 sm:p-4 rounded-2xl sm:rounded-[2rem] border border-gray-100 w-full sm:w-fit">
      
        <div class="hidden sm:flex w-10 h-10 rounded-full bg-black text-white items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>
        </div>

        <div class="relative col-span-1 sm:w-auto">
          <select v-model="filters.status" class="w-full appearance-none bg-white border border-gray-200 pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold focus:outline-none focus:border-orange-500 hover:border-orange-200 cursor-pointer sm:min-w-[140px] truncate">
            <option value="All">All Status</option>
            <option v-for="opt in options.status" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <div class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px] sm:text-xs">▼</div>
        </div>

        <div class="relative col-span-1 sm:w-auto">
          <select v-model="filters.year" class="w-full appearance-none bg-white border border-gray-200 pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold focus:outline-none focus:border-orange-500 hover:border-orange-200 cursor-pointer sm:min-w-[120px]">
            <option value="All">All Year</option>
            <option v-for="opt in options.year" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <div class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px] sm:text-xs">▼</div>
        </div>

        <div class="relative col-span-2 sm:col-span-1 sm:w-auto">
          <select v-model="filters.province" class="w-full appearance-none bg-white border border-gray-200 pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold focus:outline-none focus:border-orange-500 hover:border-orange-200 cursor-pointer sm:min-w-[150px]">
            <option value="All">All Province</option>
            <option v-for="opt in options.province" :key="opt" :value="opt">{{ opt }}</option>
          </select>
          <div class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px] sm:text-xs">▼</div>
        </div>

        <button 
          v-if="isFiltering" 
          @click="resetFilters"
          class="col-span-2 sm:col-span-1 text-xs font-bold text-red-500 hover:text-red-700 underline px-2 py-1 text-center sm:text-left"
        >
          Reset Filters
        </button>

      </div>
    </div>

    <TransitionGroup 
      name="list" 
      tag="div" 
      class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 relative"
    >
      
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 border border-orange-100 shadow-xl shadow-orange-500/5 hover:shadow-orange-500/15 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      >
        <div class="relative h-56 sm:h-72 w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gray-100 mb-4 sm:mb-6 shrink-0">
          
          <div class="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 items-center justify-center backdrop-blur-[2px]">
            <a :href="project.link" target="_blank" class="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              View Detail ↗
            </a>
          </div>

          <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex gap-2">
            <span 
              class="px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-sm flex items-center gap-1.5"
              :class="getStatusColor(project.status)"
            >
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current animate-pulse"></span>
              {{ project.status }}
            </span>
          </div>

           <div class="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <span class="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-black/60 backdrop-blur-md text-white rounded-lg text-[10px] sm:text-xs font-mono font-bold border border-white/20">
              {{ project.year }}
            </span>
          </div>

          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>

        <div class="px-2 md:px-3 pb-2 flex flex-col flex-grow">
          
          <div class="flex justify-between items-start mb-2">
            <a :href="project.link" class="block">
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-orange-600 transition-colors leading-tight line-clamp-2">
                {{ project.title }}
              </h3>
            </a>
            <span class="hidden sm:block text-orange-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              ➔
            </span>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <span class="truncate">{{ project.location }}</span>
          </div>

          <div class="h-px w-full bg-gray-100 mb-3 sm:mb-4"></div>

          <div class="mt-auto">
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Scope of Work</span>
            <div class="flex flex-wrap gap-1.5 sm:gap-2">
              <span 
                v-for="(scope, i) in project.scope" 
                :key="i"
                class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-50 border border-gray-200 rounded-md text-[10px] sm:text-xs font-bold text-gray-600 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors"
              >
                {{ scope }}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div 
        key="cta-card"
        class="group relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-center items-center text-center overflow-hidden border border-gray-800 min-h-[350px] sm:min-h-[450px]"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-purple-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] animate-pulse"></div>

        <div class="relative z-10">
          <h3 class="text-3xl sm:text-4xl font-black text-white mb-3 sm:mb-4">
            Your Project <br> 
            <span class="text-orange-500">Next?</span>
          </h3>
          <p class="text-gray-400 mb-6 sm:mb-8 max-w-xs mx-auto leading-relaxed text-sm sm:text-base">
            Ready to build something legendary? Let's add your brand to our hall of fame.
          </p>
          <a href="#contact" class="inline-block bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all hover:scale-105 shadow-lg shadow-white/10">
            Start a Project 🚀
          </a>
        </div>
      </div>

    </TransitionGroup>

    <div v-if="filteredProjects.length === 0" class="text-center py-20">
      <p class="text-lg sm:text-xl font-bold text-gray-400">No projects found with these filters.</p>
      <button @click="resetFilters" class="mt-4 text-orange-500 font-bold underline text-sm sm:text-base">Clear Filters</button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import projects from '@/data/AllProject.js'

const filters = ref({
  status: 'All',
  year: 'All',
  province: 'All'
})

const options = computed(() => {
  return {
    status: [...new Set(projects.map(p => p.status))].sort(),
    year: [...new Set(projects.map(p => p.year))].sort().reverse(),
    province: [...new Set(projects.map(p => p.province))].sort()
  }
})

const filteredProjects = computed(() => {
  return projects.filter(project => {
    const matchStatus = filters.value.status === 'All' || project.status === filters.value.status;
    const matchYear = filters.value.year === 'All' || project.year === filters.value.year;
    const matchProvince = filters.value.province === 'All' || project.province === filters.value.province;
    return matchStatus && matchYear && matchProvince;
  })
})

const isFiltering = computed(() => {
  return filters.value.status !== 'All' || filters.value.year !== 'All' || filters.value.province !== 'All'
})

const resetFilters = () => {
  filters.value = { status: 'All', year: 'All', province: 'All' }
}

const getStatusColor = (status) => {
  if(status === 'Completed') return 'bg-green-100 text-green-700 border-green-200'
  if(status === 'On Going') return 'bg-orange-100 text-orange-700 border-orange-200'
  if(status === 'Maintenance') return 'bg-blue-100 text-blue-700 border-blue-200'
  return 'bg-gray-100 text-gray-700'
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.list-leave-active {
  display: none; 
}
</style>