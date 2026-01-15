// src/data/service.js

// --- IMPORT GAMBAR ---
import imglike from '@/assets/images/img-like.png'
import imgdesign from '@/assets/images/img-designtool.png'
import imgLaptop from '@/assets/images/img-laptop.png'
import imgKamera from '@/assets/images/img-kamera.png'
import imgIot from '@/assets/images/img-iot.png' 
import imgArsitek from '@/assets/images/img-arsitek.png'
import imgKonstruksi from '@/assets/images/img-konstruksi.png'
import img3d from '@/assets/images/img-3d.png'
import imgInterior from '@/assets/images/img-interior.png'
import imgMep from '@/assets/images/img-mep.png'
import imgStructure from '@/assets/images/imgStructure.png'
import imgLandscape from '@/assets/images/imgLandscape.png'
import imgCivil from '@/assets/images/imgCivil.png'
import imgRefurbish from '@/assets/images/imgRefurbish.png'
import imgRenov from '@/assets/images/imgRenov.png'

// --- EXPORT GROUPED SERVICES ---
export const groupedServices = [
  
  // =========================================================
  // KATEGORI 1: TECHNOLOGY & DIGITAL SOLUTIONS
  // =========================================================
  {
    categoryTitle: "Technology & Digital Solutions",
    categoryDesc: "Innovation driven by code & data connectivity.",
    colorClass: "text-orange-600", // Ubah jadi Orange
    bgClass: "bg-orange-50",
    items: [
      {
        title: "Web & Apps Development",
        description: "Bikin website anti-lemot dan aplikasi mobile yang smooth parah. Tech stack modern only.",
        image: imgLaptop,
        // THEME: CLEAN TECH (Putih)
        bgClass: "bg-white",
        borderClass: "border-gray-100 shadow-xl",
        numberClass: "bg-orange-50 text-orange-600",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Internet of Things (IoT)",
        description: "Bikin benda mati jadi pinter. Smart home, automation, monitoring? Semua terkoneksi di HP.",
        image: imgIot,
        // THEME: DARK TECH (Hitam Pekat)
        bgClass: "bg-[#1212]", 
        borderClass: "border-gray-800",
        numberClass: "bg-orange-600 text-white", // Aksen Orange
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      }
    ]
  },

  // =========================================================
  // KATEGORI 2: CREATIVE & DESIGN INDUSTRY
  // =========================================================
  {
    categoryTitle: "Creative & Design Industry",
    categoryDesc: "Crafting visual stories that sell.",
    colorClass: "text-gray-900", // Ubah jadi Hitam/Abu
    bgClass: "bg-gray-100",
    items: [
      {
        title: "Social Media Management",
        description: "Konten viral, caption nendang, dan strategi yang bikin algoritma tunduk sama brand kamu.",
        image: imglike,
        // THEME: MODERN GREY (Abu Gelap)
        bgClass: "bg-[#1f1f]", 
        borderClass: "border-gray-700",
        numberClass: "bg-white text-black",
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      },
      {
        title: "Branding & Graphic Design",
        description: "Logo, Identitas Visual, dan UI/UX Design yang fresh. No more desain kaku.",
        image: imgdesign,
        // THEME: SIGNATURE GRETIVA (Gradient Orange)
        bgClass: "bg-gradient-to-br from-orange-500 to-orange-700",
        borderClass: "border-orange-400",
        numberClass: "bg-black text-white",
        textTitleClass: "text-white",
        textDescClass: "text-orange-100"
      },
      {
        title: "Creative Studio & Visual",
        description: "Foto produk aesthetic & Video cinematic. Bikin audiens kamu betah scrolling.",
        image: imgKamera,
        // THEME: MINIMALIST (Putih)
        bgClass: "bg-white",
        borderClass: "border-gray-200 shadow-xl",
        numberClass: "bg-gray-900 text-white",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "3D & 2D Visualization",
        description: "Visualisasi ide liar kamu ke bentuk 3D realistis atau 2D art yang eye-catching dan detail.",
        image: img3d,
        // THEME: DEEP BLACK (Hitam)
        bgClass: "bg-[#1212]",
        borderClass: "border-gray-800",
        numberClass: "bg-orange-500 text-white",
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      }
    ]
  },

  // =========================================================
  // KATEGORI 3: ARCHITECTURE, ENGINEERING & CONSTRUCTION
  // =========================================================
  {
    categoryTitle: "Architecture, Engineering & Construction",
    categoryDesc: "Building the future, strong and aesthetic.",
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50", // Selang seling bg section
    items: [
      {
        title: "Arsitektur & Design",
        description: "Desain bangunan yang gak cuma kokoh, tapi instagramable. Fungsionalitas meets estetika.",
        image: imgArsitek,
        // THEME: BLUEPRINT (Putih Bersih)
        bgClass: "bg-white",
        borderClass: "border-gray-200 shadow-xl",
        numberClass: "bg-orange-50 text-orange-600",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Interior Design",
        description: "Sulap ruangan jadi nyaman maksimal dan aesthetic. Mood booster buat kerja atau rebahan.",
        image: imgInterior,
        // THEME: COZY (Warm Grey / Stone)
        bgClass: "bg-stone-50",
        borderClass: "border-stone-200",
        numberClass: "bg-white text-black",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Structure Works",
        description: "Pondasi beton & kerangka baja yang solid. Tulang punggung bangunan biar berdiri tegak.",
        image: imgStructure,
        // THEME: INDUSTRIAL (Abu Besi)
        bgClass: "bg-[#2d2d]",
        borderClass: "border-gray-600",
        numberClass: "bg-gray-500 text-white",
        textTitleClass: "text-black",
        textDescClass: "text-gray-300"
      },
      {
        title: "General Contractor",
        description: "Eksekusi lapangan sat-set. Bangun rumah, kantor, atau gudang dengan standar tinggi.",
        image: imgKonstruksi,
        // THEME: CONSTRUCTION (Gradient Hitam ke Abu)
        bgClass: "bg-gradient-to-br from-gray-900 to-black",
        borderClass: "border-gray-700",
        numberClass: "bg-orange-500 text-black font-bold", // Aksen Orange Safety
        textTitleClass: "text-white",
        textDescClass: "text-gray-300"
      },
      {
        title: "MEP Engineering",
        description: "Mechanical, Electrical, & Plumbing. Jantungnya bangunan biar aman, nyala, dan lancar.",
        image: imgMep,
        // THEME: TECHNICAL (Putih)
        bgClass: "bg-white",
        borderClass: "border-orange-100 shadow-lg",
        numberClass: "bg-orange-100 text-orange-600",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Civils & Infrastructure",
        description: "Infrastruktur jalan, drainase, sampai jembatan. Pekerjaan sipil presisi tinggi.",
        image: imgCivil,
        // THEME: CONCRETE (Abu Semen)
        bgClass: "bg-gray-100",
        borderClass: "border-gray-300 shadow-md",
        numberClass: "bg-gray-800 text-white",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Landscaping",
        description: "Sulap lahan gersang jadi oase hijau. Taman estetik & hardscape yang bikin suasana adem.",
        image: imgLandscape,
        // THEME: EARTH (Hitam Natural) - Biar gambar hijaunya pop up
        bgClass: "bg-[#1111]",
        borderClass: "border-gray-800",
        numberClass: "bg-white text-black",
        textTitleClass: "text-black", 
        textDescClass: "text-gray-400"
      },
      {
        title: "Refurbishment",
        description: "Kasih nyawa baru buat gedung tua. Upgrade fasilitas & tampilan tanpa merusak struktur asli.",
        image: imgRefurbish,
        // THEME: RENEWAL (Orange Tint Halus)
        bgClass: "bg-orange-50/50",
        borderClass: "border-orange-200",
        numberClass: "bg-orange-600 text-white",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Renovation",
        description: "Bosen suasana lama? Kita rombak total interior & eksterior biar makin fresh.",
        image: imgRenov,
        // THEME: BOLD ACTION (Orange Tua)
        bgClass: "bg-orange-700",
        borderClass: "border-orange-500",
        numberClass: "bg-white text-orange-800 font-bold",
        textTitleClass: "text-white",
        textDescClass: "text-orange-100"
      }
    ]
  }
]