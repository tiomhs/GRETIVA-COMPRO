// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue' // Import page About yang baru kamu buat
import Project from '../pages/Project.vue' // Import page project yang baru kamu buat

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Fitur tambahan: Saat pindah page, otomatis scroll ke paling atas
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router