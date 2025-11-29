<template>
  <section class="relative max-w-5xl mx-auto py-20 text-center">
    <!-- Badge -->
    <span class="inline-block font-medium text-sm bg-white px-4 py-2 rounded-full shadow text-orange-800 relative z-30">
      Welcome to GRETIVA
    </span>

    <!-- Heading -->
    <div class="leading-tight mt-6 relative z-30">
      <h1 class="text-4xl md:text-5xl font-bold text-black-800 mb-2">
        Invest In Impact.
      </h1>
      <h1 class="text-4xl md:text-5xl font-bold text-orange-500">
        Get Digital Solutions.
      </h1>
    </div>

    <!-- Hero Image (centered) -->
    <div
      class="absolute w-[80vh]"
      style="z-index: 10; top: 20%; left: 50%; transform: translate(-50%, 0%);"
    >
      <img
        :src="tree"
        alt="Hero Image"
        class="w-[80vh]"
      />
    </div>

    <!-- Call to Action Button -->
    <div class="mt-[50vh] relative z-30">
      <button
        class="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        Get Started
      </button>
    </div>
  </section>
</template>

<script setup>
import tree from '@/assets/images/tree.png'
</script>
