// IMPORT GAMBAR LAMA
import imglike from '@/assets/images/img-like.png'
import imgdesign from '@/assets/images/img-designtool.png'
import imgLaptop from '@/assets/images/img-laptop.png'
import imgKamera from '@/assets/images/img-kamera.png'

// IMPORT GAMBAR BARU (Pastikan file gambarnya sudah ada di folder assets)
// Jika belum ada, bisa pakai gambar dummy dulu
import imgIot from '@/assets/images/img-iot.png' 
import imgArsitek from '@/assets/images/img-arsitek.png'
import imgKonstruksi from '@/assets/images/img-konstruksi.png'
import img3d from '@/assets/images/img-3d.png'
import imgInterior from '@/assets/images/img-interior.png'
import imgMep from '@/assets/images/img-mep.png'

const services = [
  // --- 1. Web & Apps ---
  {
    title: "Web & Apps Development",
    description: "Bikin website anti-lemot dan aplikasi mobile yang smooth parah. Tech stack modern only.",
    image: imgLaptop,
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    numberClass: "bg-white text-orange-600",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  // --- 2. IoT ---
  {
    title: "Internet of Things (IoT)",
    description: "Bikin benda mati jadi pinter. Smart home, automation, monitoring? Semua terkoneksi di HP.",
    image: imgIot, // Ganti dengan gambar IoT
    bgClass: "bg-[#111]", 
    borderClass: "border-gray-800",
    numberClass: "bg-blue-500 text-white", // Aksen Blue untuk Tech
    textTitleClass: "text-white",
    textDescClass: "text-gray-400"
  },
  // --- 3. Social Media ---
  {
    title: "Social Media Management",
    description: "Konten viral, caption nendang, dan strategi yang bikin algoritma tunduk sama brand kamu.",
    image: imglike,
    bgClass: "bg-[#111]", 
    borderClass: "border-gray-800",
    numberClass: "bg-orange-500 text-white",
    textTitleClass: "text-white",
    textDescClass: "text-gray-400"
  },
  // --- 4. Branding & Design ---
  {
    title: "Branding & Graphic Design",
    description: "Logo, Identitas Visual, dan UI/UX Design yang fresh. No more desain kaku.",
    image: imgdesign,
    bgClass: "bg-gradient-to-br from-orange-500 to-orange-600",
    borderClass: "border-orange-400",
    numberClass: "bg-black text-white",
    textTitleClass: "text-white",
    textDescClass: "text-orange-100"
  },
  // --- 5. Arsitektur ---
  {
    title: "Arsitektur & Design",
    description: "Desain bangunan yang gak cuma kokoh, tapi instagramable. Fungsionalitas meets estetika.",
    image: imgArsitek, // Ganti dengan gambar Arsitek
    bgClass: "bg-white",
    borderClass: "border-gray-200 shadow-xl",
    numberClass: "bg-gray-900 text-white",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  // --- 6. Interior ---
  {
    title: "Interior Design",
    description: "Sulap ruangan jadi nyaman maksimal dan aesthetic. Mood booster buat kerja atau rebahan.",
    image: imgInterior, // Ganti dengan gambar Interior
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    numberClass: "bg-white text-orange-600",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  // --- 7. Creative Studio ---
  {
    title: "Creative Studio & Visual",
    description: "Foto produk aesthetic & Video cinematic. Bikin audiens kamu betah scrolling.",
    image: imgKamera,
    bgClass: "bg-white",
    borderClass: "border-gray-200 shadow-xl",
    numberClass: "bg-orange-100 text-orange-600",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  // --- 8. 3D & 2D Design ---
  {
    title: "3D & 2D Visualization",
    description: "Visualisasi ide liar kamu ke bentuk 3D realistis atau 2D art yang eye-catching dan detail.",
    image: img3d, // Ganti dengan gambar 3D
    bgClass: "bg-[#111]",
    borderClass: "border-gray-800",
    numberClass: "bg-purple-500 text-white", // Aksen Purple untuk Art
    textTitleClass: "text-white",
    textDescClass: "text-gray-400"
  },
  // --- 9. Kontraktor ---
  {
    title: "General Contractor",
    description: "Eksekusi lapangan sat-set. Bangun rumah, kantor, atau gudang dengan standar tinggi.",
    image: imgKonstruksi, // Ganti dengan gambar Helm proyek/Bangunan
    bgClass: "bg-gradient-to-br from-gray-800 to-black",
    borderClass: "border-gray-700",
    numberClass: "bg-yellow-500 text-black", // Warna konstruksi
    textTitleClass: "text-white",
    textDescClass: "text-gray-300"
  },
  // --- 10. MEP ---
  {
    title: "MEP Engineering",
    description: "Mechanical, Electrical, & Plumbing. Jantungnya bangunan biar aman, nyala, dan lancar.",
    image: imgMep, // Ganti dengan gambar Teknis/Kabel
    bgClass: "bg-white",
    borderClass: "border-blue-100 shadow-lg",
    numberClass: "bg-blue-100 text-blue-600", // Aksen teknis
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  }
]

export default services;