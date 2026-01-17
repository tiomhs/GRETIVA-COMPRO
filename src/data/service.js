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

// Placeholder untuk Medical
import imgMedical1 from '@/assets/images/imgMedical1.png' 
import imgMedical2 from '@/assets/images/imgMedical2.png' 
import imgMedical3 from '@/assets/images/imgMedical3.png' 

export const groupedServices = [

  // =========================================================
  // 1. MEDICAL SUPPORT INDUSTRY
  // =========================================================
  {
    categoryTitle: "Medical Support Industry",
    categoryDesc: "Strategic partnerships in high-complexity medical fields.",
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    items: [
      {
        title: "Bedah Toraks Kardio Vaskular",
        description: "Support system untuk Prof. dr. I.G.N.G. Ngoerah General Hospital.",
        image: imgMedical1,
        bgClass: "bg-white",
        borderClass: "border-rose-100 shadow-xl",
        numberClass: "bg-rose-50 text-rose-600",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Bedah Onkologi Support",
        description: "Kolaborasi teknologi medis untuk unit onkologi RSUP Ngoerah & Korea.",
        image: imgMedical2,
        // Ganti Hex #0f172a jadi bg-slate-900
        bgClass: "bg-black", 
        borderClass: "border-gray-700",
        numberClass: "bg-rose-500 text-white",
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      },
      {
        title: "International Society of Nephrology",
        description: "Global networking dan support system untuk komunitas Nefrologi internasional.",
        image: imgMedical3,
        bgClass: "bg-gray-50",
        borderClass: "border-gray-200",
        numberClass: "bg-white text-rose-600",
        textTitleClass: "text-gray-900",
        textDescClass: "text-gray-600"
      }
    ]
  },
  
  // =========================================================
  // 2. TECHNOLOGY & DIGITAL SOLUTIONS
  // =========================================================
  {
    categoryTitle: "Technology & Digital Solutions",
    categoryDesc: "Innovation driven by code & data connectivity.",
    colorClass: "text-blue-600", 
    bgClass: "bg-blue-50",
    items: [
      {
        title: "Web Development",
        description: "Website performa tinggi, SEO friendly, dan responsif untuk segala device.",
        image: imgLaptop,
        bgClass: "bg-white",
        borderClass: "border-gray-100 shadow-xl",
        numberClass: "bg-blue-50 text-blue-600",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "System Development",
        description: "Custom ERP, CRM, atau sistem manajemen perusahaan yang kompleks dan terintegrasi.",
        image: imgLaptop,
        // Ganti Hex #0a0a0a jadi bg-neutral-950
        bgClass: "bg-white", 
        borderClass: "border-gray-800",
        numberClass: "bg-blue-600 text-white", 
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      },
      {
        title: "Internet of Things (IoT)",
        description: "Smart home, sensor monitoring, dan otomasi industri yang terkoneksi ke cloud.",
        image: imgIot,
        bgClass: "bg-gradient-to-br from-blue-900 to-black", 
        borderClass: "border-blue-900",
        numberClass: "bg-cyan-400 text-black", 
        textTitleClass: "text-white",
        textDescClass: "text-blue-100"
      },
      {
        title: "Creative Technology",
        description: "Interactive installation, AR/VR experience, dan solusi teknologi futuristik untuk event.",
        image: img3d, 
        bgClass: "bg-white",
        borderClass: "border-blue-200",
        numberClass: "bg-blue-100 text-blue-700",
        textTitleClass: "text-gray-900",
        textDescClass: "text-gray-600"
      }
    ]
  },

  // =========================================================
  // 3. CREATIVE & DESIGN INDUSTRY
  // =========================================================
  {
    categoryTitle: "Creative & Design Industry",
    categoryDesc: "Crafting visual stories that sell.",
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
    items: [
      {
        title: "Digital Marketing",
        description: "Strategi pemasaran digital comprehensive, Ads management, dan SEO optimization.",
        image: imglike,
        // Ganti Hex #1f1f1f jadi bg-neutral-900
        bgClass: "bg-white", 
        borderClass: "border-gray-700",
        numberClass: "bg-white text-black",
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      },
      {
        title: "Creative Services",
        description: "Production house untuk Video commercial, Photography, dan Content creation.",
        image: imgKamera,
        bgClass: "bg-white",
        borderClass: "border-gray-200 shadow-xl",
        numberClass: "bg-gray-900 text-white",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Branding",
        description: "Membangun identitas brand yang kuat mulai dari Logo, Filosofi, hingga Brand Guideline.",
        image: imgdesign,
        bgClass: "bg-gradient-to-br from-orange-500 to-orange-700",
        borderClass: "border-orange-400",
        numberClass: "bg-black text-white",
        textTitleClass: "text-white",
        textDescClass: "text-orange-100"
      },
      {
        title: "Visual Design",
        description: "Layout, Tipografi, dan desain grafis untuk kebutuhan promosi cetak maupun digital.",
        image: imgdesign, 
        bgClass: "bg-stone-50",
        borderClass: "border-stone-200",
        numberClass: "bg-orange-600 text-white",
        textTitleClass: "text-gray-900",
        textDescClass: "text-gray-600"
      },
      {
        title: "2D & 3D Design",
        description: "Ilustrasi, Motion graphic, dan pemodelan 3D untuk visualisasi produk atau arsitektur.",
        image: img3d,
        bgClass: "bg-white",
        borderClass: "border-gray-800",
        numberClass: "bg-purple-500 text-white",
        textTitleClass: "text-black",
        textDescClass: "text-gray-400"
      }
    ]
  },

  // =========================================================
  // 4. ARCHITECTURE, ENGINEERING & CONSTRUCTION
  // =========================================================
  {
    categoryTitle: "Architecture, Engineering & Construction",
    categoryDesc: "Building the future, strong and aesthetic.",
    colorClass: "text-gray-900",
    bgClass: "bg-gray-100", 
    items: [
      {
        title: "Architectural Visualization",
        description: "Desain bangunan yang gak cuma kokoh, tapi instagramable. Fungsionalitas meets estetika.",
        image: imgArsitek,
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
        // Ganti Hex #2d2d2d jadi bg-zinc-800
        bgClass: "bg-zinc-800",
        borderClass: "border-gray-600",
        numberClass: "bg-gray-500 text-white",
        textTitleClass: "text-white",
        textDescClass: "text-gray-300"
      },
      {
        title: "General Contractor",
        description: "Eksekusi lapangan sat-set. Bangun rumah, kantor, atau gudang dengan standar tinggi.",
        image: imgKonstruksi,
        bgClass: "bg-gradient-to-br from-gray-900 to-black",
        borderClass: "border-gray-700",
        numberClass: "bg-orange-500 text-black font-bold", 
        textTitleClass: "text-white",
        textDescClass: "text-gray-300"
      },
      {
        title: "MEP Engineering",
        description: "Mechanical, Electrical, & Plumbing. Jantungnya bangunan biar aman, nyala, dan lancar.",
        image: imgMep,
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
        // Ganti Hex #111111 jadi bg-neutral-950
        bgClass: "bg-white",
        borderClass: "border-gray-800",
        numberClass: "bg-white text-black",
        textTitleClass: "text-black", 
        textDescClass: "text-gray-400"
      },
      {
        title: "Refurbishment",
        description: "Kasih nyawa baru buat gedung tua. Upgrade fasilitas & tampilan tanpa merusak struktur asli.",
        image: imgRefurbish,
        bgClass: "bg-orange-50", 
        borderClass: "border-orange-200",
        numberClass: "bg-orange-600 text-white",
        textTitleClass: "text-gray-900", 
        textDescClass: "text-gray-600"
      },
      {
        title: "Renovation",
        description: "Bosen suasana lama? Kita rombak total interior & eksterior biar makin fresh.",
        image: imgRenov,
        bgClass: "bg-white",
        borderClass: "border-orange-500",
        numberClass: "bg-white text-orange-800 font-bold",
        textTitleClass: "text-black",
        textDescClass: "text-orange-100"
      }
    ]
  }
]