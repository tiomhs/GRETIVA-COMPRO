// Pastikan kamu punya gambar-gambar ini atau ganti URL-nya dengan link gambar kamu
const projects = [
  {
    id: 1,
    title: "Kopi Skena App",
    status: "Completed",        // WAJIB ADA: Untuk Filter Status & Badge Warna
    year: "2024",               // WAJIB ADA: Untuk Filter Tahun
    province: "Bali",           // WAJIB ADA: Untuk Filter Provinsi
    location: "Canggu, Badung", // WAJIB ADA: Teks Lokasi di Card
    scope: ["Mobile App", "UI/UX Design", "AR Dev"], // WAJIB ADA: Tags Scope
    desc: "A loyalty app for local coffee shops with AR menu features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", 
    link: "#"
  },
  {
    id: 2,
    title: "Nebula Finance",
    status: "On Going",
    year: "2025",
    province: "Jakarta",
    location: "SCBD, Jakarta Selatan",
    scope: ["Web Development", "Blockchain", "Frontend"],
    desc: "High-performance crypto dashboard with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Urban Streetwear",
    status: "Completed",
    year: "2023",
    province: "Jawa Barat",
    location: "Bandung, Jawa Barat",
    scope: ["Branding", "Social Media", "Photography"],
    desc: "Complete visual identity overhaul for a Tokyo-based fashion brand.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "EduLearn LMS",
    status: "Completed",
    year: "2024",
    province: "Yogyakarta",
    location: "Sleman, DIY",
    scope: ["System Development", "Backend", "Cloud Infra"],
    desc: "Student-centered learning platform design for modern schools.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  }
]

export default projects;