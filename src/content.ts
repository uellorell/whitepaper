// Editorial content is collected here so the research and business teams can update it.
export const dimensions = [
  {
    number: "01",
    title: "Meet the Gen Z",
    lead: "Identitas yang tak selalu tunggal.",
    topics: ["Identitas", "Multi-persona", "Inner circle", "Mental health"],
    accent: "identity",
  },
  {
    number: "02",
    title: "Inside Gen Z Culture",
    lead: "Budaya baru, rasa yang akrab.",
    topics: ["Nostalgia", "Thrifting", "Photobox", "Camera culture"],
    accent: "culture",
  },
  {
    number: "03",
    title: "Music Through Gen Z’s Lens",
    lead: "Cara menemukan musik terus berubah.",
    topics: ["TikTok", "Music discovery", "Genre-agnostic", "Feel vs artist"],
    accent: "music",
  },
  {
    number: "04",
    title: "The Gen Z Money Mindset",
    lead: "Pilihan finansial yang penuh nuansa.",
    topics: ["Financial independence", "Lifestyle", "Hobi", "FOMO", "Saving"],
    accent: "money",
  },
] as const;

export const insights = [
  {
    number: "01. IDENTITAS",
    quote: "Multi-persona bukan sekadar pencitraan—tetapi mekanisme perlindungan diri.",
    question: "Apa yang membuat mereka memilih sisi diri yang berbeda di tiap ruang?",
  },
  {
    number: "02. KULTUR",
    quote: "Nostalgia mereka sering datang dari era yang bahkan tidak pernah mereka alami.",
    question: "Mengapa masa lalu terasa begitu relevan bagi generasi digital?",
  },
  {
    number: "03. MUSIK",
    quote: "Feel sebuah lagu bisa lebih penting daripada genre maupun siapa musisinya.",
    question: "Apa artinya bagi cara musik ditemukan dan dibagikan?",
  },
  {
    number: "04. FINANSIAL",
    quote: "Kemandirian finansial menjadi fondasi untuk berbagai tujuan hidup.",
    question: "Bagaimana mereka menyeimbangkannya dengan passion dan gaya hidup?",
  },
] as const;

// No report page assets were supplied. These are clearly labeled illustrative layouts,
// based only on chapter names and teaser copy from the approved brief.
export const previewPages = [
  { type: "cover", label: "Sampul report", title: "Beyond the Stereotypes", subtitle: "Understanding Gen Z", kicker: "Research & Analytics KG Media" },
  { type: "chapter", label: "Pembuka bab", title: "Satu Orang, Dua Panggung", subtitle: "Identity & the many sides of Gen Z", kicker: "01. MEET THE GEN Z" },
  { type: "quote", label: "Contoh halaman insight", title: "Nostalgia dari era yang tak pernah dialami.", subtitle: "Inside Gen Z Culture", kicker: "02. CULTURE" },
  { type: "chapter", label: "Pembuka bab", title: "TikTok: Discovery Musik Gen Z", subtitle: "Music Through Gen Z’s Lens", kicker: "03. MUSIC" },
  { type: "quote", label: "Contoh halaman insight", title: "Kemandirian finansial sebagai fondasi.", subtitle: "The Gen Z Money Mindset", kicker: "04. MONEY" },
] as const;

export const timeline = [
  { year: "2024", title: "Defined\\Undefined: Uncovering Indonesian Gen Zs", focus: "Behavior & identity" },
  { year: "2024", title: "Kebiasaan Finansial Anak Muda Gen Z", focus: "Financial & spending behaviour" },
  { year: "2025", title: "Rhythm of Relevance", focus: "Music & discovery" },
  { year: "2026", title: "RGen Z Behaviour", focus: "Culture, lifestyle & recent behavior" },
] as const;

export const audiences = [
  { number: "01", title: "Brand & Marketing", value: "Memahami cara Gen Z membentuk identitas dan merespons tren." },
  { number: "02", title: "Product & Business", value: "Membaca prioritas, lifestyle, dan perilaku spending." },
  { number: "03", title: "Media & Content", value: "Memahami pola discovery, TikTok, musik, dan budaya viral." },
  { number: "04", title: "Research & Strategy", value: "Mendapatkan sintesis berbagai studi Gen Z dalam satu report." },
] as const;

export const faqItems = [
  {
    question: "Apa saja yang saya dapatkan setelah membeli?",
    answer: "Full digital whitepaper Understanding Gen Z yang menyintesis temuan empat studi, serta akses Kompas.com PLUS MAX. [Konfirmasi rincian akses PLUS MAX]",
  },
  { question: "Bagaimana report dikirim?", answer: "[Konfirmasi mekanisme pengiriman report]" },
  { question: "Apakah report dapat di-download?", answer: "[Konfirmasi apakah file dapat di-download]" },
  { question: "Apakah pembelian termasuk PLUS MAX?", answer: "Ya, pembelian mencakup akses Kompas.com PLUS MAX. [Konfirmasi durasi dan aktivasi akses PLUS MAX]" },
  { question: "Apakah membership diperpanjang otomatis?", answer: "[Konfirmasi mekanisme renewal PLUS MAX]" },
  { question: "Apakah report bisa digunakan sebagai referensi pekerjaan?", answer: "[Konfirmasi ketentuan penggunaan dan sitasi report]" },
  { question: "Bagaimana jika email belum diterima?", answer: "[Konfirmasi kontak bantuan pembelian dan prosedur pengiriman ulang]" },
] as const;
