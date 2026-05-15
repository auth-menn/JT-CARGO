# J&T Cargo Wonokromo — Landing Page

## 📁 Struktur Proyek

```
jt-cargo/
│
├── index.html              ← Entry point utama (import semua section)
│
├── css/
│   └── global.css          ← Variabel warna, typography, card, animasi global
│
├── js/
│   └── main.js             ← Scroll-reveal, active nav, scroll-to-top
│
├── sections/               ← Satu file JS per section
│   ├── header.js           ← Header / Navbar (fixed, responsive, hamburger)
│   ├── home.js             ← Hero / Banner utama
│   ├── tentang.js          ← Tentang Kami
│   ├── keunggulan.js       ← Keunggulan Kami (4 cards)
│   ├── layanan.js          ← Layanan Kami (4 cards)
│   ├── carakirim.js        ← Cara Kirim (5 steps)
│   ├── jenisbarang.js      ← Jenis Barang (6 icons)
│   ├── cta.js              ← CTA Banner (WhatsApp)
│   ├── kontak.js           ← Lokasi & Kontak + Google Maps
│   └── footer.js           ← Footer (4 kolom)
│
└── assets/                 ← Folder untuk foto & gambar asli
    ├── hero-truck.jpg      ← Foto armada / hero (ganti placeholder)
    ├── team.jpg            ← Foto tim J&T Cargo
    ├── layanan-1.jpg       ← Foto Kargo Standar
    ├── layanan-2.jpg       ← Foto Kargo Kecil
    ├── layanan-3.jpg       ← Foto Layanan SLA
    └── layanan-4.jpg       ← Foto Pindahan & Partai Besar
```

## 🚀 Cara Menjalankan

1. **Tidak perlu install apapun!**
2. Buka file `index.html` langsung di browser, atau:
3. Gunakan Live Server di VS Code (klik kanan → Open with Live Server)

> ⚠️ Beberapa fitur (JS module / fetch) butuh server lokal.
> Disarankan pakai **Live Server** atau **XAMPP**.

## 🖼️ Mengganti Foto

Letakkan foto asli di folder `assets/`, lalu ganti komentar placeholder di masing-masing file section:

```html
<!-- Sebelum (placeholder): -->
<i class="fa-solid fa-truck-moving text-7xl"></i>

<!-- Sesudah (foto asli): -->
<img src="assets/hero-truck.jpg" alt="J&T Cargo Truck" class="w-full h-full object-cover">
```

## 🎨 Mengubah Warna / Font

Edit variabel CSS di `css/global.css`:

```css
:root {
  --green:       #1a7c3e;   /* Warna utama hijau */
  --green-dark:  #145f30;   /* Hijau gelap (hover) */
  --green-light: #e8f5ec;   /* Hijau muda (background icon) */
  --accent:      #f5a623;   /* Warna aksen kuning-oranye */
}
```

## 📞 Mengganti Nomor WhatsApp

Cari dan ganti semua `6281233538858` dengan nomor WA Anda:

```
href="https://wa.me/62XXXXXXXXXXXX"
```

## 🌐 Deploy

Upload seluruh folder ke:
- **Hostinger / cPanel** → Upload via File Manager
- **Netlify** → Drag & drop folder ke netlify.com/drop
- **Vercel** → `vercel --prod`

## 📦 Dependensi (via CDN — tidak perlu install)

| Library       | Fungsi                       |
|---------------|------------------------------|
| Tailwind CSS  | Utility-first styling        |
| Alpine.js     | Interaktivitas ringan        |
| Font Awesome  | Icon library                 |
| Google Fonts  | Plus Jakarta Sans + Syne     |
