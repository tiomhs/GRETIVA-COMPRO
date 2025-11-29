<template>
  <section class="h-screen flex items-center justify-center bg-green-700 text-white">
    <h1 ref="title" class="text-5xl font-bold">Our Services</h1>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const title = ref(null)

onMounted(() => {
  gsap.from(title.value, { opacity: 0, scale: 0.8, duration: 1 })
})
</script>
