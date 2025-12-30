<template>
  <section class="bg-white py-24 rounded-t-[4rem] -mt-12 relative z-40 pb-32 overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="group relative bg-orange-600 rounded-[3rem] p-10 md:p-14 overflow-hidden text-white flex flex-col justify-between min-h-[500px] shadow-2xl shadow-orange-500/20 transform transition-all duration-500 hover:scale-[1.01]">
           
           <div class="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" 
                style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');">
           </div>

           <div class="absolute -right-10 top-0 text-[12rem] font-black text-white opacity-10 select-none leading-none pointer-events-none group-hover:translate-x-4 transition-transform duration-700">
             VIS
             <br>
             ION
           </div>

           <div class="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-spin-slow pointer-events-none"></div>

           <div class="relative z-10">
             <div class="inline-flex items-center gap-2 border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Our North Star
             </div>
             
             <h3 class="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
               To be the <br> 
               <span class="relative inline-block mt-2">
                 <span class="relative z-10 text-orange-600 bg-white px-4 py-1 transform -rotate-1 inline-block">No.1 Creative</span>
                 <span class="absolute top-1 left-1 w-full h-full bg-black -rotate-1 -z-0"></span>
               </span> <br> 
               Tech Powerhouse.
             </h3>
           </div>
           
           <div class="relative z-10 mt-12 border-t border-white/20 pt-8">
             <p class="text-orange-100 text-xl font-medium leading-relaxed max-w-md">
               "Creating an ecosystem where technology serves imagination, not the other way around."
             </p>
           </div>
        </div>

        <div class="group relative bg-[#0a0a0a] rounded-[3rem] p-10 md:p-14 overflow-hidden text-white flex flex-col justify-between min-h-[500px] shadow-2xl shadow-black/20 transform transition-all duration-500 hover:scale-[1.01]">
           
           <div class="absolute inset-0 opacity-20 pointer-events-none"
                style="background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 40px 40px;">
           </div>

           <div class="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/20 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-colors duration-700 pointer-events-none"></div>

           <div class="relative z-10">
             <div class="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                The Blueprint
             </div>

             <ul class="space-y-6">
               <li class="group/item flex items-start gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default border border-transparent hover:border-white/10">
                 <span class="text-gray-600 font-mono text-xl mt-1 group-hover/item:text-orange-500 transition-colors">01</span>
                 <div>
                   <h4 class="text-2xl font-bold mb-1 group-hover/item:translate-x-2 transition-transform duration-300">Mind-Blowing EXP.</h4>
                   <p class="text-sm text-gray-500 group-hover/item:text-gray-400">We don't just build, we entertain.</p>
                 </div>
               </li>

               <li class="group/item flex items-start gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default border border-transparent hover:border-white/10">
                 <span class="text-gray-600 font-mono text-xl mt-1 group-hover/item:text-purple-500 transition-colors">02</span>
                 <div>
                   <h4 class="text-2xl font-bold mb-1 group-hover/item:translate-x-2 transition-transform duration-300">Go On-Chain.</h4>
                   <p class="text-sm text-gray-500 group-hover/item:text-gray-400">Web2 is boring. We bring brands to Web3.</p>
                 </div>
               </li>

               <li class="group/item flex items-start gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-default border border-transparent hover:border-white/10">
                 <span class="text-gray-600 font-mono text-xl mt-1 group-hover/item:text-green-500 transition-colors">03</span>
                 <div>
                   <h4 class="text-2xl font-bold mb-1 group-hover/item:translate-x-2 transition-transform duration-300">Kill Boring Webs.</h4>
                   <p class="text-sm text-gray-500 group-hover/item:text-gray-400">Make the internet fun again.</p>
                 </div>
               </li>
             </ul>
           </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ANIMASI MUTAR PELAN (Untuk lingkaran dekorasi) */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spinSlow 20s linear infinite;
}
</style>