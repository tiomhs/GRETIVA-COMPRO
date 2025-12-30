<template>
  <main class="bg-black min-h-screen pt-24 md:pt-32 text-white selection:bg-orange-500 selection:text-white">

      
    <ContactHero />
    <ContactForm />
     
    <ContactFAQ />
   

  </main>
</template>

<script setup>
import { ref } from 'vue'
import ContactHero from '@/sections/Contact/ContactHero.vue'
import ContactForm from '@/sections/Contact/ContactForm.vue'
import ContactFAQ from '@/sections/Contact/ContactFAQ.vue'

// Data Options
const services = ["Web Development", "Mobile App", "Branding", "UI/UX Design", "Full Package"]
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
</script>