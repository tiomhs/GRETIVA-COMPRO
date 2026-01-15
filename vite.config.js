import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // Ganti '/nama-repository-kamu/' sesuai nama repo di GitHub.
  // Kalau nanti pakai domain sendiri (gretiva.com), ubah jadi '/'
  // base: process.env.NODE_ENV === 'production' ? '/GRETIVA-COMPRO/' : '/', 
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})