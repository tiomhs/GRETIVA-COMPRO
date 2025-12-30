import { createApp } from 'vue'
import './assets/main.css' // atau './assets/css/main.css' sesuaikan punyamu
import App from './App.vue'
import router from './router' // Import router yang baru dibuat

const app = createApp(App)

app.use(router) // Gunakan router
app.mount('#app')