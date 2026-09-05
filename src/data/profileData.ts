export interface WorkItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
  skills: string[];
  href: string;
  imageUrl: string;
}

export interface ProjectItem {
  slug: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  details: string;
  metrics: string;
  tech: string[];
  liveApp: boolean;
  href: string;
  externalHref: string;
  imageUrl: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  publisher: string;
  year: string;
  summary: string;
  abstract: string;
  tags: string[];
  href: string;
  imageUrl: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  href: string;
  imageUrl: string;
}

export interface UpdateFeedItem {
  id: string;
  badge: "Project" | "Publication" | "News";
  title: string;
  date: string;
  summary: string;
  link: string;
  imageUrl: string;
}

export const PROFILE_DATA = {
  name: "TEN",
  fullName: "Teguh Eko N.",
  tagline: "Eksplorasi Karya, Inisiatif Mandiri, Catatan & Dokumentasi",
  bio: "Ruang personal untuk mendokumentasikan perjalanan, membagikan eksplorasi karya, inisiatif kegiatan, catatan pemikiran, serta ragam proyek yang dikembangkan secara berkelanjutan.",
  avatarUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=260&auto=format&fit=crop&q=80",
  status: "Terbuka untuk Kolaborasi & Diskusi",
  location: "Indonesia",
  stats: [
    { label: "visits", value: "1.2k+" },
    { label: "projects", value: "4" },
    { label: "writings", value: "3" },
    { label: "experiences", value: "3" },
  ],
  contact: {
    email: "admin@ten.my.id",
    website: "https://ten.my.id",
    ssoPortal: "https://auth.ten.my.id",
    docsUrl: "https://ten.my.id/docs",
    location: "Indonesia",
  },
  socialLinks: [
    { label: "Website", url: "https://ten.my.id", icon: "🌐" },
    { label: "GitHub", url: "https://github.com", icon: "💻" },
    { label: "Dokumentasi", url: "https://ten.my.id/docs", icon: "📖" },
    { label: "SSO Auth", url: "https://auth.ten.my.id", icon: "🛡️" },
    { label: "Email", url: "mailto:admin@ten.my.id", icon: "✉️" },
  ],
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "digital-architect",
    role: "Inisiator & Koordinator Program",
    company: "TEN Initiative",
    period: "2023 — Sekarang",
    location: "Indonesia / Remote",
    summary: "Memimpin perancangan inisiatif mandiri, koordinasi kegiatan kolaboratif, pengarsipan terbuka, dan pengembangan solusi terpadu.",
    details: [
      "Mengembangkan kerangka kerja mandiri dengan tata kelola terstruktur, terbuka, dan terdokumentasi secara berkala.",
      "Membangun kolaborasi lintas bidang untuk mendorong efisiensi kegiatan dan keterbukaan akses informasi publik.",
      "Mengintegrasikan sarana komunikasi dan pencatatan yang mudah dipahami serta dapat diakses oleh berbagai kalangan.",
    ],
    skills: ["Pengembangan Inisiatif", "Perencanaan Strategis", "Kolaborasi Tim", "Manajemen Program"],
    href: "https://ten.my.id",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "cloud-systems-engineer",
    role: "Spesialis Tata Kelola Alur Kerja",
    company: "Modular Solutions",
    period: "2020 — 2023",
    location: "Indonesia",
    summary: "Mengelola efisiensi operasional alur kerja, penyederhanaan proses, koordinasi tim, dan pemeliharaan media dokumentasi.",
    details: [
      "Merancang standarisasi prosedur operasional guna memastikan konsistensi kualitas hasil dan kelancaran alur koordinasi.",
      "Menerapkan evaluasi berkala untuk mengenali hambatan kerja dan mengoptimalkan ritme kerja tim.",
      "Menyusun dokumentasi panduan kerja yang terstruktur, komunikatif, dan mudah dipelajari oleh anggota tim.",
    ],
    skills: ["Tata Kelola Operasional", "Manajemen Alur Kerja", "Optimasi Proses", "Dokumentasi"],
    href: "https://ten.my.id/docs",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "web-technology-consultant",
    role: "Konsultan Program & Transformasi Lembaga",
    company: "Community Empowerment Alliance",
    period: "2017 — 2020",
    location: "Indonesia",
    summary: "Mendampingi lembaga kemasyarakatan dan komunitas nirlaba dalam penyusunan strategi, pengorganisasian data, dan modernisasi tata kelola.",
    details: [
      "Memberikan pendampingan lapangan bagi lembaga non-profit dalam pembenahan tata kelola informasi dan pelaporan.",
      "Mengembangkan materi pelatihan dan lokakarya peningkatan kapasitas serta kemandirian pengurus lembaga.",
      "Membantu transformasi alur kerja manual menuju sistem pencatatan berbasis digital yang transparan dan akuntabel.",
    ],
    skills: ["Konsultasi Program", "Pemberdayaan Komunitas", "Pelatihan SDM", "Penyusunan Strategi"],
    href: "https://auth.ten.my.id",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    slug: "views-counter",
    name: "Sistem Metrik & Kunjungan Terbuka",
    category: "Analitik & Metrik",
    icon: "📊",
    description: "Pencatatan statistik kunjungan publik secara real-time yang transparan, ringan, dan akurat.",
    details: "Inisiatif pelacak statistik pengunjung yang dirancang untuk memberikan transparansi interaksi publik tanpa mengorbankan privasi pengguna. Dilengkapi antarmuka pemantau metrik yang ringkas dan informatif.",
    metrics: "1,240+ Kunjungan • 34 Apresiasi",
    tech: ["Transparansi Data", "Statistik Real-time", "Antarmuka Responsif"],
    liveApp: true,
    href: "/projects/details?slug=views-counter",
    externalHref: "https://ten.my.id/views-counter",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "cloudflare-status",
    name: "Dasbor Pemantauan Layanan",
    category: "Pemantauan Publik",
    icon: "⚡",
    description: "Pemantauan status jaringan dan ketersediaan infrastruktur layanan publik secara terbuka.",
    details: "Dasbor pemantauan keterhubungan jaringan dan ketersediaan layanan publik yang menyajikan data operasional terkini bagi para pengunjung dan mitra.",
    metrics: "890+ Pantauan • 19 Status Normal",
    tech: ["Monitoring Terbuka", "Status Real-time", "Transparansi Jaringan"],
    liveApp: true,
    href: "/projects/details?slug=cloudflare-status",
    externalHref: "https://www.cloudflarestatus.com",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "docs-api",
    name: "Pusat Panduan & Dokumentasi",
    category: "Panduan & Rujukan",
    icon: "📖",
    description: "Kumpulan panduan tata cara kolaborasi, alur kerja terstruktur, dan referensi inisiatif terbuka.",
    details: "Pusat rujukan dan dokumentasi komprehensif yang disusun untuk memudahkan siapa pun dalam memahami tata kelola, acuan kerja sama, dan pemanfaatan sarana yang ada.",
    metrics: "650+ Pembaca • 27 Kontributor",
    tech: ["Panduan Terstruktur", "Dokumentasi Terbuka", "Standar Kolaborasi"],
    liveApp: true,
    href: "/projects/details?slug=docs-api",
    externalHref: "https://ten.my.id/docs",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "scratchpad",
    name: "Catatan Cepat & Gagasan Instan",
    category: "Produktivitas Personal",
    icon: "📝",
    description: "Ruang pencatatan gagasan kilat di peramban dengan penyimpanan otomatis yang aman dan praktis.",
    details: "Alat bantu sederhana untuk menuangkan gagasan kilat, draf tulisan, dan memo penting harian langsung di peramban tanpa memerlukan proses registrasi yang rumit.",
    metrics: "430+ Catatan • 12 Tersimpan",
    tech: ["Penyimpanan Lokal", "Antarmuka Bersih", "Auto-Save"],
    liveApp: true,
    href: "/projects/details?slug=scratchpad",
    externalHref: "/projects/scratchpad",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&auto=format&fit=crop&q=80",
  },
];

export const PUBLICATION_ITEMS: PublicationItem[] = [
  {
    id: "edge-architecture-wp",
    title: "Membangun Sistem Modular Berkelanjutan: Pendekatan Efisiensi & Kemandirian",
    publisher: "Seri Gagasan Mandiri",
    year: "2025",
    summary: "Refleksi dan telaah komprehensif mengenai strategi membangun sistem kerja yang adaptif, modular, dan hemat sumber daya.",
    abstract: "Tulisan ini mengulas pentingnya pendekatan modular dalam merancang sebuah sistem maupun inisiatif kerja. Dengan mengurai kompleksitas menjadi bagian-bagian yang mandiri, organisasi dapat bergerak lebih lincah dan meminimalkan ketergantungan pada struktur yang kaku.",
    tags: ["Efisiensi", "Kemandirian", "Sistem Kerja"],
    href: "https://ten.my.id/docs",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "sso-rbac-specification",
    title: "Prinsip Keamanan & Tata Kelola Akses Terpadu dalam Lingkungan Kolaborasi",
    publisher: "Jurnal Tata Kelola & Organisasi",
    year: "2024",
    summary: "Kajian mengenai tata kelola hak akses, transparansi informasi, dan perlindungan privasi dalam ruang kerja bersama.",
    abstract: "Membahas konsep dan prinsip dasar dalam mengelola identitas pengguna, hak akses berjenjang, dan transparansi otorisasi agar tercipta ruang kolaborasi yang aman, teratur, dan saling percaya.",
    tags: ["Tata Kelola", "Keamanan", "Privasi"],
    href: "https://auth.ten.my.id",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "automation-nonprofit",
    title: "Digitalisasi & Pemberdayaan Komunitas Nirlaba di Era Terbuka",
    publisher: "Warta Transformasi Sosial",
    year: "2024",
    summary: "Dokumentasi pengalaman lapangan dalam mendampingi komunitas nirlaba menerapkan efisiensi kerja dan pelaporan terbuka.",
    abstract: "Studi reflektif mengenai tantangan dan peluang implementasi teknologi tepat guna pada organisasi kemasyarakatan, serta pentingnya menyelaraskan inovasi dengan kebutuhan nyata masyarakat.",
    tags: ["Sosial", "Non-Profit", "Pemberdayaan"],
    href: "https://ten.my.id",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "launching-next-v1",
    title: "Pembaruan Ruang Personal: Desain Baru yang Terbuka & Minimalis",
    date: "05 Sep 2026",
    category: "Pembaruan Ruang",
    summary: "Meluncurkan tampilan ruang personal yang lebih segar, fokus pada kemudahan membaca, kesederhanaan visual, dan keterbukaan informasi.",
    content: "Ruang personal ini hadir sebagai wadah terpadu untuk merangkum berbagai inisiatif, portofolio karya, tulisan reflektif, serta catatan perjalanan. Dengan antarmuka yang bersih dan navigasi yang langsung, diharapkan pengunjung dapat dengan nyaman mengeksplorasi setiap bagian.",
    author: "Teguh Eko N.",
    href: "/news/details?slug=launching-next-v1",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "sso-v9-upgrade",
    title: "Penyelarasan Akses & Keamanan Ruang Informasi",
    date: "28 Agu 2026",
    category: "Tata Kelola",
    summary: "Penyempurnaan mekanisme identitas dan akses untuk mendukung kemudahan navigasi di seluruh ruang publikasi.",
    content: "Memperbarui sistem akses agar lebih ramah pengguna, memudahkan sinkronisasi data profil, serta memastikan keandalan akses pada berbagai modul layanan yang disediakan.",
    author: "Teguh Eko N.",
    href: "/news/details?slug=sso-v9-upgrade",
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "edge-kv-optimization",
    title: "Optimalisasi Kecepatan & Aksesibilitas Halaman",
    date: "15 Agu 2026",
    category: "Kinerja Halaman",
    summary: "Peningkatan efisiensi waktu muat halaman agar dapat diakses dengan lancar dan ringan dari berbagai perangkat.",
    content: "Melalui penyesuaian tata kelola aset dan pemangkasan beban transfer data, kini seluruh halaman dapat dibuka dengan sangat cepat baik melalui ponsel pintar maupun komputer desktop.",
    author: "Teguh Eko N.",
    href: "/news/details?slug=edge-kv-optimization",
    imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=80",
  },
];

export const UPDATE_FEED_ITEMS: UpdateFeedItem[] = [
  {
    id: "upd-1",
    badge: "Project",
    title: "Sistem Metrik & Kunjungan Terbuka",
    date: "Sep 2026",
    summary: "Pencatatan statistik kunjungan publik real-time kini aktif dengan tampilan visual yang ringkas.",
    link: "/projects/details?slug=views-counter",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "upd-2",
    badge: "News",
    title: "Pembaruan Ruang Personal: Desain Baru yang Terbuka & Minimalis",
    date: "05 Sep 2026",
    summary: "Ruang personal terpadu dengan navigasi langsung dan antarmuka minimalis modern.",
    link: "/news/details?slug=launching-next-v1",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "upd-3",
    badge: "Publication",
    title: "Membangun Sistem Modular Berkelanjutan: Pendekatan Efisiensi & Kemandirian",
    date: "Agu 2026",
    summary: "Telaah strategi perancangan sistem kerja yang adaptif, mandiri, dan hemat sumber daya.",
    link: "/publications/details?id=edge-architecture-wp",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "upd-4",
    badge: "Project",
    title: "Catatan Cepat & Gagasan Instan (Scratchpad)",
    date: "Jul 2026",
    summary: "Sarana pencatatan kilat untuk menuangkan ide dan memo harian secara instan di peramban.",
    link: "/projects/details?slug=scratchpad",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "upd-5",
    badge: "News",
    title: "Penyelarasan Akses & Keamanan Ruang Informasi",
    date: "28 Agu 2026",
    summary: "Peningkatan mekanisme akses yang aman, teratur, dan mudah dijangkau.",
    link: "/news/details?slug=sso-v9-upgrade",
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&auto=format&fit=crop&q=80",
  },
];
