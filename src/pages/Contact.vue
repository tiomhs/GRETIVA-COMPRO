<template>
  <main class="bg-black min-h-screen pt-24 md:pt-32 text-white selection:bg-orange-500 selection:text-white">

      
    <ContactHero />
    <ContactForm />
     
    <ContactFAQ />
   

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ContactHero from '@/sections/Contact/ContactHero.vue'
import ContactForm from '@/sections/Contact/ContactForm.vue'
import ContactFAQ from '@/sections/Contact/ContactFAQ.vue'
import { fetchServices } from '@/services/api'

// Data Options
const services = ref([])
const budgets = ["< $5k", "$5k - $10k", "$10k - $20k", "$20k+", "Not Sure"]
const socials = [
  { name: "Instagram", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "Dribbble", link: "#" },
  { name: "Behance", link: "#" }
]

// Form State
const selectedService = ref(null)
const selectedBudget = ref(null)

const handleSubmit = () => {
  // Simulasi Submit
  alert("Message Sent! We will reply within 24 hours. 🚀")
}

onMounted(async () => {
  try {
    const response = await fetchServices()
    services.value = response.data.map(s => s.name)
  } catch (error) {
    console.error("Failed to fetch services:", error)
    // Fallback if API fails
    services.value = ["Web Development", "Mobile App", "Branding", "UI/UX Design", "Full Package"]
  }
})
</script>