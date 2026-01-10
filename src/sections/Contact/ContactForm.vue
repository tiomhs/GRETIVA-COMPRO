<template>
  <section class="container mx-auto px-6 md:mt-48 mb-20 md:mb-32 relative">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      
      <div class="lg:col-span-4 space-y-12">
        
        <div class="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors">
          <h3 class="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Say Hello</h3>
          <a href="mailto:gretiva@gmail.com" class="text-2xl font-bold hover:text-orange-500 transition-colors break-words">
            gretiva@gmail.com
          </a>
        </div>

        <div class="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors">
          <h3 class="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">HQ - The Lab</h3>
          <p class="text-xl font-medium leading-relaxed">
            Jl. Danau Tamblingan,<br>
            Sanur, Bali - Indonesia.<br>
            <span class="text-gray-500 text-sm mt-2 block">(Coffee is on us)</span>
          </p>
        </div>

        <div>
          <h3 class="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Stalk Us</h3>
          <div class="flex flex-wrap gap-4">
            <a v-for="social in socials" :key="social.name" :href="social.link" class="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-bold text-sm text-white">
              {{ social.name }} ↗
            </a>
          </div>
        </div>

      </div>

      <div class="lg:col-span-8">
        <form @submit.prevent="sendToWhatsApp" class="space-y-10 bg-white/5 p-8 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden">
          
          <div class="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] pointer-events-none rounded-full"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div class="group">
              <label class="block text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 group-focus-within:text-orange-500 transition-colors">What's your name?</label>
              <input 
                v-model="form.name"
                type="text" 
                placeholder="John Doe" 
                class="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-medium text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700" 
                required 
              />
            </div>

            <div class="group">
              <label class="block text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 group-focus-within:text-orange-500 transition-colors">Your Email?</label>
              <input 
                v-model="form.email"
                type="email" 
                placeholder="john@company.com" 
                class="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-medium text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700" 
                required 
              />
            </div>
          </div>

          <div class="relative z-10 pt-4 group">
            <label class="block text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 group-focus-within:text-orange-500 transition-colors">Tell us more</label>
            <textarea 
              v-model="form.message"
              rows="6" 
              placeholder="Tell us about your project goals, timeline, and dreams..." 
              class="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-medium text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-700 resize-none leading-relaxed"
              required
            ></textarea>
          </div>

          <div class="pt-8 relative z-10">
            <button type="submit" class="group w-full md:w-auto bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_orange]">
              <span>Send to WhatsApp</span>
              <span class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">🚀</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const socials = [
  { name: "Instagram", link: "#" },
  { name: "LinkedIn", link: "#" },
]

// 1. STATE FORM
const form = ref({
  name: '',
  email: '',
  message: ''
})

// 2. NOMOR WHATSAPP TUJUAN (GANTI DENGAN NOMOR KAMU)
const whatsappNumber = "6285829161701" // Contoh: 6281234567890

// 3. FUNCTION KIRIM KE WA
const sendToWhatsApp = () => {
  const text = `Halo Gretiva! 👋%0A%0ASaya ingin diskusi project.%0A%0A👤 Nama: ${form.value.name}%0A📧 Email: ${form.value.email}%0A📝 Pesan: ${form.value.message}%0A%0ATerima kasih!`
  
  const url = `https://wa.me/${whatsappNumber}?text=${text}`
  window.open(url, '_blank')
}
</script>