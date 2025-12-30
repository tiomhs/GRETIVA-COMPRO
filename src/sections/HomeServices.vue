<template>
  <section class="py-20 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-wide mb-4">
          Trust Proof
        </span>
        
        <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span class="text-purple-600">Bots & Scammers</span> <br />
          <span class="text-gray-900">are Always Ahead of You</span>
        </h2>
        
        <p class="text-gray-500 text-lg">
          That's why it needs to be easy to prove that you can be trusted
        </p>
      </div>

    </div>

    <div class="flex overflow-x-auto gap-6 px-4 md:px-8 pb-10 snap-x snap-mandatory scroll-smooth hide-scrollbar items-stretch">
      
      <div class="w-2 md:w-12 flex-shrink-0"></div>

      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="relative flex-shrink-0 w-[300px] md:w-[380px] rounded-[2rem] p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 snap-center"
        :class="card.bgClass"
      >
        <div>
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-6 bg-white"
            :class="card.textClass"
          >
            0{{ index + 1 }}
          </div>

          <h3 
            class="text-2xl font-bold mb-4 leading-snug"
            :class="card.textClass"
          >
            {{ card.title }}
          </h3>

          <p 
            class="text-sm md:text-base leading-relaxed"
            :class="card.descClass"
          >
            {{ card.description }}
          </p>
        </div>

        <div class="mt-8 flex justify-center">
          <img 
            :src="card.image" 
            :alt="card.title" 
            class="h-40 w-auto object-contain drop-shadow-md transform transition group-hover:scale-105"
          />
        </div>

      </div>

      <div class="w-2 md:w-12 flex-shrink-0"></div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Gunakan gambar placeholder atau import gambar asetmu sendiri
// Tips: Untuk hasil persis, gunakan gambar transparan (PNG)
const cards = ref([
  {
    title: "But Bot Farms Take 90% of the Pool",
    description: "You farm an airdrop for 5 months straight, but bots take everything.",
    bgClass: "bg-purple-50",     // Background Ungu Muda
    textClass: "text-purple-600", // Teks Ungu
    descClass: "text-purple-400",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/robot-assistant-5430379-4536647.png" 
  },
  {
    title: "But the Founder is a Serial Rug-Puller",
    description: "You invest in a token that is promised to make 1000x, but lose it all.",
    bgClass: "bg-pink-50",       // Background Pink Muda
    textClass: "text-pink-600",   // Teks Pink
    descClass: "text-pink-400",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/hacker-5430386-4536654.png"
  },
  {
    title: "But You Get No Benefits for This",
    description: "You use a DEX for 8 months EVERY single day and still pay the 1% fee.",
    bgClass: "bg-blue-50",       // Background Biru Muda
    textClass: "text-blue-600",   // Teks Biru
    descClass: "text-blue-400",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/sad-girl-5430397-4536665.png"
  },
  {
    title: "Even Though You've Never Defaulted",
    description: "You're depositing 150% collateral but still treated like a stranger.",
    bgClass: "bg-teal-50",       // Background Hijau/Teal Muda
    textClass: "text-teal-600",   // Teks Hijau/Teal
    descClass: "text-teal-700",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/confused-man-5430404-4536672.png"
  }
])
</script>

<style scoped>
/* Utility class untuk menyembunyikan scrollbar tapi tetap bisa discroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>