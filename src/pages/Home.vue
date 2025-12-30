<template>
    <Navbar />
    <HomeHero />
    <HomeServices />
    <HomeBreaker />
    <HomeProjects />
    <HomeBreak />
    <Footer />
  
</template>

<script setup>
  import HomeHero from '../sections/Home/HomeHero.vue' 
  import HomeServices from '../sections/Home/HomeServices.vue'
  import HomeBreaker from '../sections/Home/HomeBreaker.vue'
  import HomeProjects from '../sections/Home/HomeProjects.vue'
  import HomeBreak from '@/sections/Home/HomeBreak.vue';
  import Footer from '@/components/common/footer.vue';
  import Navbar from '@/components/common/navbar.vue';

</script>
