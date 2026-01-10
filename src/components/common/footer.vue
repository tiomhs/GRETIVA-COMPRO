<template>
  <footer class="bg-black text-white pt-20 pb-10 overflow-hidden relative border-t border-white/10">
    
    <div class="container mx-auto px-6 relative z-10 h-full">
      
      <div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
        
        <div class="max-w-sm">
          <img 
            src="/logo.png" 
            alt="Gretiva Logo" 
            class="h-14 mb-6 object-contain"
          />
          <p class="text-gray-400 text-lg">
            Crafting digital magic for brands that refuse to be boring. Based in the Cloud, accessible worldwide.
          </p>
        </div>

        <div class="flex gap-12 md:gap-24">
          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-orange-500 uppercase tracking-widest text-sm mb-2">Explore</h4>
            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">Services</a>
            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">Work</a>
            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">About</a>
            <a href="#" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300">Contact</a>
          </div>

          <div class="flex flex-col gap-4">
            <h4 class="font-bold text-orange-500 uppercase tracking-widest text-sm mb-2">Connect</h4>
            <a href="#" class="text-gray-400 hover:text-orange-400 transition-colors">Instagram ↗</a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn ↗</a>
            <a href="#" class="text-gray-400 hover:text-sky-400 transition-colors">Twitter (X) ↗</a>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 border-t border-white/10 pt-10 mb-2 md:mb-0 text-sm text-gray-500">
        <p>&copy; 2025 Gretiva Digital Agency. All rights reserved.</p>
        
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

    </div>

  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Opsional: Jika ingin efek smooth scroll global di CSS juga */
html {
  scroll-behavior: smooth;
}
</style>