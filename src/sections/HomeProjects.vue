<template>
  <section class="py-24 bg-white relative">
    <div class="container mx-auto px-4">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
          
          <span class="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-xs font-bold mb-6">
            Decentralized reputation that actually works
          </span>

          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            With zPass Everyone <br />
            Makes More Money <br />
            Onchain
          </h2>

          <p class="text-gray-500 text-lg md:text-xl font-medium">
            Unless you are a scammer or own a bot farm.
          </p>

        </div>

        <div class="lg:col-span-7 flex flex-col gap-6">
          
          <div 
            v-for="(item, index) in features" 
            :key="index"
            class="rounded-[2.5rem] p-8 md:p-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 transition-transform hover:-translate-y-1 duration-300"
            :class="item.bgClass"
          >
            
            <div class="w-full md:w-3/5">
              <span 
                class="inline-block px-3 py-1 rounded-md text-xs font-bold mb-4 bg-white"
                :class="item.textClass"
              >
                {{ item.badge }}
              </span>

              <h3 
                class="text-2xl md:text-3xl font-bold leading-snug"
                :class="item.textClass"
              >
                {{ item.title }}
              </h3>
            </div>

            <div class="w-full md:w-2/5 flex justify-center md:justify-end">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-sm rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    badge: "zPass is an Eigen AVS",
    title: "Protected by the crypto-economic security of Eigen Layer",
    bgClass: "bg-purple-50",       // Ungu Muda
    textClass: "text-purple-600",   // Teks Ungu
    // Ganti dengan gambar portal/gerbang kamu
    image: "https://cdn.dribbble.com/users/124059/screenshots/15454655/media/76508953151855909249e08355677864.png?resize=400x300&vertical=center" 
  },
  {
    badge: "Access boosted rewards",
    title: "Good reputation pays — unlock boosted rewards and exclusive airdrops",
    bgClass: "bg-blue-50",         // Biru Muda
    textClass: "text-blue-500",     // Teks Biru
    // Ganti dengan gambar pintu bercahaya
    image: "https://cdn.dribbble.com/users/1068771/screenshots/14498369/media/c84273577317789f21f154562c4a45a1.png?resize=400x300&vertical=center"
  },
  {
    badge: "A behavior-centric AI neural network",
    title: "AI analysis ensures real users get verified, not bots",
    bgClass: "bg-teal-50",         // Hijau/Tosca Muda
    textClass: "text-teal-600",     // Teks Hijau
    // Ganti dengan gambar otak/AI
    image: "https://cdn.dribbble.com/users/2514124/screenshots/15579930/media/8939622d645145f6396f4c718b958e4e.png?resize=400x300&vertical=center"
  }
])
</script>