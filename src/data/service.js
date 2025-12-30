import imglike from '@/assets/images/img-like.png'
import imgdesign from '@/assets/images/img-designtool.png'
import imgLaptop from '@/assets/images/img-laptop.png'
import imgKamera from '@/assets/images/img-kamera.png'

const services = [
  {
    title: "Web & Apps Development",
    description: "Bikin website anti-lemot dan aplikasi mobile yang smooth parah. Tech stack modern only.",
    image: imgLaptop,
    // Style: Orange Base (Primary)
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    numberClass: "bg-white text-orange-600",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  {
    title: "Social Media Management",
    description: "Konten viral, caption nendang, dan strategi yang bikin algoritma tunduk sama brand kamu.",
    image: imglike,
    // Style: Dark Mode (High Contrast & Premium)
    bgClass: "bg-[#111]", 
    borderClass: "border-gray-800",
    numberClass: "bg-orange-500 text-white", // Aksen Orange menyala di gelap
    textTitleClass: "text-white",
    textDescClass: "text-gray-400"
  },
  {
    title: "Creative Studio & Visuals",
    description: "Foto produk aesthetic & Video cinematic. Bikin audiens kamu betah scrolling.",
    image: imgKamera,
    // Style: White Clean (Minimalist)
    bgClass: "bg-white",
    borderClass: "border-gray-200 shadow-xl", // Shadow biar gak flat
    numberClass: "bg-orange-100 text-orange-600",
    textTitleClass: "text-gray-900",
    textDescClass: "text-gray-600"
  },
  {
    title: "Branding & Graphic Design",
    description: "Logo, Identitas Visual, dan UI/UX Design yang fresh. No more desain kaku.",
    image: imgdesign,
    // Style: Orange Gradient/Solid (Bold)
    bgClass: "bg-gradient-to-br from-orange-500 to-orange-600",
    borderClass: "border-orange-400",
    numberClass: "bg-black text-white",
    textTitleClass: "text-white",
    textDescClass: "text-orange-100"
  }
]

export default services;