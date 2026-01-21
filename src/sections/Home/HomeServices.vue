<template>
  <section ref="serviceSection" class="relative bg-white overflow-hidden" id="services">
    
    <div class="min-h-screen md:h-screen flex flex-col justify-center relative py-20 md:py-0">
      
      <div class="absolute top-20 right-20 w-40 md:w-80 h-40 md:h-80 bg-orange-200/40 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-40 md:w-80 h-40 md:h-80 bg-gray-200/50 rounded-full blur-[60px] md:blur-[100px]" style="animation-delay: 1s;"></div>

      <div class="container mx-auto px-6 my-12 md:mb-0 md:mb-6 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-4">
          ● What We Do
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Playground</span>
        </h2>
      </div>

      <div class="w-full md:flex md:items-center md:py-10 md:mb-4 md:pl-[calc(50vw-225px)]">
        
        <div 
          ref="cardsTrack" 
          class="flex flex-col md:flex-row gap-12 md:gap-20 px-6 md:px-8 w-full md:w-max items-center md:items-stretch"
        >
          
          <div 
            v-for="(group, gIndex) in services" 
            :key="gIndex"
            class="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center"
          >
            
            <div class="w-full md:w-[300px] flex flex-col justify-center md:h-[450px] p-4 md:p-0 text-center md:text-left md:sticky md:left-0">
              <span class="text-xs font-bold tracking-widest uppercase mb-2 opacity-60" :class="group.colorClass">
                 0{{ gIndex + 1 }} / Category
              </span>
              <h3 class="text-3xl md:text-5xl font-black leading-tight mb-4 text-gray-900">
                {{ group.categoryTitle }}
              </h3>
              <p class="text-gray-500 text-sm md:text-base font-medium">
                {{ group.categoryDesc }}
              </p>
              <div class="h-1 w-20 bg-gray-200 mt-6 rounded-full mx-auto md:mx-0">
                 <div class="h-full w-10 rounded-full" :class="group.bgClass.replace('bg-', 'bg-orange-500')"></div> 
              </div>
            </div>

            <div 
              v-for="(service, sIndex) in group.items" 
              :key="sIndex"
              class="group relative w-full max-w-[350px] md:w-[450px] min-h-[450px] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] border-2 shrink-0 bg-white"
              :class="[service.bgClass, service.borderClass]"
            >
              <div class="relative z-10">
                <div 
                  class="w-12 h-12 md:w-14 md:h-6 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm transition-colors"
                  :class="service.numberClass"
                >
                  {{ gIndex + 1 }}.{{ sIndex + 1 }}
                </div>

                <h3 
                  class="text-2xl font-black mb-3 leading-tight"
                  :class="service.textTitleClass"
                >
                  {{ service.title }}
                </h3>

                <p 
                  class="text-base font-medium leading-relaxed"
                  :class="service.textDescClass"
                >
                  {{ service.description }}
                </p>
              </div>

              <div class="relative z-10 flex justify-end mt-4">
                <img 
                  :src="service.image" 
                  :alt="service.title" 
                  class="w-32 h-32 object-contain transform group-hover:rotate-6 transition-transform duration-500 animate-float custom-shadow"
                />
              </div>

            </div>

            <div class="hidden md:block w-1 h-full border-r border-dashed border-gray-300 mx-4"></div>

          </div>
          <div class="hidden md:block w-[50vw] flex-shrink-0"></div>

        </div>
      </div>

      <div class="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-gray-400 font-bold text-sm tracking-widest">
        <span class="animate-bounce">←</span> SCROLL DOWN <span class="animate-bounce">→</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fetchServices } from '@/services/api'

gsap.registerPlugin(ScrollTrigger)

const serviceSection = ref(null)
const cardsTrack = ref(null)
const services = ref([])

let ctx;

// --- STYLE MAPPING ---
// Mapping style kategori berdasarkan nama category dari Backend
const categoryStyles = {
  "Medical Support Industry": {
    colorClass: "text-rose-600",
    bgClass: "bg-rose-50",
    numberColor: "text-rose-600"
  },
  "Technology & Digital Solutions": {
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
    numberColor: "text-blue-600"
  },
  "Creative & Design Industry": {
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
    numberColor: "text-orange-600"
  },
  "Architecture, Engineering & Construction": {
    colorClass: "text-gray-900",
    bgClass: "bg-gray-100",
    numberColor: "text-gray-900"
  }
}

// Fallback style jika kategori baru tidak ada di map
const defaultCategoryStyle = {
  colorClass: "text-gray-600",
  bgClass: "bg-gray-50",
  numberColor: "text-gray-600"
}

// Mapping style item spesifik berdasarkan Nama Service (untuk mempertahankan desain lama)
const itemStyles = {
  // Medical
  "Bedah Toraks Kardio Vaskular": { bgClass: "bg-white", borderClass: "border-rose-100 shadow-xl", numberClass: "bg-rose-50 text-rose-600", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Bedah Onkologi Support": { bgClass: "bg-black", borderClass: "border-gray-700", numberClass: "bg-rose-500 text-white", textTitleClass: "text-black", textDescClass: "text-gray-400" }, // Note: text-black di bg-black mungkin salah di data lama, tapi kita ikutin dulu atau fix jadi text-white
  "International Society of Nephrology": { bgClass: "bg-gray-50", borderClass: "border-gray-200", numberClass: "bg-white text-rose-600", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  
  // Tech
  "Web Development": { bgClass: "bg-white", borderClass: "border-gray-100 shadow-xl", numberClass: "bg-blue-50 text-blue-600", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "System Development": { bgClass: "bg-white", borderClass: "border-gray-800", numberClass: "bg-blue-600 text-white", textTitleClass: "text-black", textDescClass: "text-gray-400" },
  "Internet of Things (IoT)": { bgClass: "bg-gradient-to-br from-blue-900 to-black", borderClass: "border-blue-900", numberClass: "bg-cyan-400 text-black", textTitleClass: "text-white", textDescClass: "text-blue-100" },
  "Creative Technology": { bgClass: "bg-white", borderClass: "border-blue-200", numberClass: "bg-blue-100 text-blue-700", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },

  // Creative
  "Digital Marketing": { bgClass: "bg-white", borderClass: "border-gray-700", numberClass: "bg-white text-black", textTitleClass: "text-black", textDescClass: "text-gray-400" },
  "Creative Services": { bgClass: "bg-white", borderClass: "border-gray-200 shadow-xl", numberClass: "bg-gray-900 text-white", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Branding": { bgClass: "bg-gradient-to-br from-orange-500 to-orange-700", borderClass: "border-orange-400", numberClass: "bg-black text-white", textTitleClass: "text-white", textDescClass: "text-orange-100" },
  "Visual Design": { bgClass: "bg-stone-50", borderClass: "border-stone-200", numberClass: "bg-orange-600 text-white", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "2D & 3D Design": { bgClass: "bg-white", borderClass: "border-gray-800", numberClass: "bg-purple-500 text-white", textTitleClass: "text-black", textDescClass: "text-gray-400" },

  // Architecture
  "Architectural Visualization": { bgClass: "bg-white", borderClass: "border-gray-200 shadow-xl", numberClass: "bg-orange-50 text-orange-600", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Interior Design": { bgClass: "bg-stone-50", borderClass: "border-stone-200", numberClass: "bg-white text-black", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Structure Works": { bgClass: "bg-zinc-800", borderClass: "border-gray-600", numberClass: "bg-gray-500 text-white", textTitleClass: "text-white", textDescClass: "text-gray-300" },
  "General Contractor": { bgClass: "bg-gradient-to-br from-gray-900 to-black", borderClass: "border-gray-700", numberClass: "bg-orange-500 text-black font-bold", textTitleClass: "text-white", textDescClass: "text-gray-300" },
  "MEP Engineering": { bgClass: "bg-white", borderClass: "border-orange-100 shadow-lg", numberClass: "bg-orange-100 text-orange-600", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Civils & Infrastructure": { bgClass: "bg-gray-100", borderClass: "border-gray-300 shadow-md", numberClass: "bg-gray-800 text-white", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Landscaping": { bgClass: "bg-white", borderClass: "border-gray-800", numberClass: "bg-white text-black", textTitleClass: "text-black", textDescClass: "text-gray-400" },
  "Refurbishment": { bgClass: "bg-orange-50", borderClass: "border-orange-200", numberClass: "bg-orange-600 text-white", textTitleClass: "text-gray-900", textDescClass: "text-gray-600" },
  "Renovation": { bgClass: "bg-white", borderClass: "border-orange-500", numberClass: "bg-white text-orange-800 font-bold", textTitleClass: "text-black", textDescClass: "text-orange-100" }
}

const defaultItemStyle = {
  bgClass: "bg-white",
  borderClass: "border-gray-100 shadow-sm",
  numberClass: "bg-gray-100 text-gray-800",
  textTitleClass: "text-gray-900",
  textDescClass: "text-gray-600"
}

// FIX: Bedah Onkologi textTitleClass clash dengan bg-black. Harusnya text-white kalau background gelap.
if (itemStyles["Bedah Onkologi Support"]) itemStyles["Bedah Onkologi Support"].textTitleClass = "text-white";


const loadData = async () => {
    try {
        const response = await fetchServices();
        const rawServices = response.data;

        // Grouping Logic
        const grouped = {};
        
        rawServices.forEach(service => {
            const catName = service.category ? service.category.name : "Uncategorized";
            const catDesc = service.category ? service.category.description : "";
            
            if (!grouped[catName]) {
                const style = categoryStyles[catName] || defaultCategoryStyle;
                grouped[catName] = {
                    categoryTitle: catName,
                    categoryDesc: catDesc, // Backend category description
                    colorClass: style.colorClass,
                    bgClass: style.bgClass,
                    items: []
                };
            }

            const itemStyle = itemStyles[service.name] || defaultItemStyle;
            
            grouped[catName].items.push({
                title: service.name,
                description: service.description,
                image: service.icon, // URL dari backend
                bgClass: itemStyle.bgClass,
                borderClass: itemStyle.borderClass,
                numberClass: itemStyle.numberClass,
                textTitleClass: itemStyle.textTitleClass,
                textDescClass: itemStyle.textDescClass
            });
        });

        // Convert Object to Array
        services.value = Object.values(grouped);

        // Init GSAP setelah DOM updated
        await nextTick();
        initGSAP();

    } catch (error) {
        console.error("Failed to fetch services:", error);
    }
}

const initGSAP = () => {
  ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        if (!cardsTrack.value) return; 
        const totalScroll = cardsTrack.value.scrollWidth - window.innerWidth;
        
        gsap.to(cardsTrack.value, {
          x: () => -totalScroll, 
          ease: "none", 
          scrollTrigger: {
            trigger: serviceSection.value,
            pin: true,
            scrub: 1, 
            end: () => "+=" + cardsTrack.value.scrollWidth,
            anticipatePin: 1
          }
        })
      }
    });
  }, serviceSection.value)
}

onMounted(() => {
  loadData();
})

onUnmounted(() => {
  if(ctx) ctx.revert()
})
</script>

<style scoped>
.custom-shadow {
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>