<template>
  <section ref="hero" class="h-screen flex items-center justify-center bg-purple-800 text-white">
    <h1 ref="text" class="text-5xl font-bold">About Us</h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const text = ref()

onMounted(() => {
  gsap.from(text.value, { opacity: 0, y: 40, duration: 1 })
})
</script>
