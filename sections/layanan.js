const layananItems = [
  {
    img:   'assets/layanan1.png',
    title: 'Kargo Standar',
    desc:  'Solusi kirim barang besar dengan biaya lebih hemat dan jangkauan luas ke seluruh Indonesia.',
    badge: null,
  },
  {
    img:   'assets/layanan2.png',
    title: 'Kargo Kecil',
    desc:  'Cocok untuk kebutuhan bisnis (fashion, kosmetik, elektronik, dll) dengan pengiriman prioritas.',
    badge: null,
  },
  {
    img:   'assets/layanan3.png',
    title: 'Layanan SLA',
    desc:  'Pengiriman dengan estimasi waktu terjamin (next day / H+2 / H+3) sesuai kebutuhan Anda.',
    badge: null,
  },
  {
    img:   'assets/layanan4.png',
    title: 'Pindahan &amp; Partai Besar',
    desc:  'Layanan khusus pindahan dan kiriman volume besar dengan proses aman dan lebih praktis.',
    badge: null,
  },
];

document.getElementById('layanan-mount').innerHTML = `
<section id="layanan" class="bg-white py-16">
  <div class="w-full max-w-[1400px] mx-auto px-5">

    <div class="text-center mb-12 reveal">
      <h2 class="text-3xl font-bold" style="color:var(--green)">
        Layanan Kami
      </h2>
    </div>

    <!-- Cards -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
      ${layananItems.map((item, i) => `
        <div class="bg-white rounded-md reveal relative overflow-hidden h-full"
             style="--i:${i}; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">

          ${item.badge ? `
            <span class="absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style="background:var(--accent)">${item.badge}</span>
          ` : ''}

          <!-- Gambar full width, tanpa padding, flush ke atas & samping -->
          <div style="width:100%; height:160px; overflow:hidden;">
            <img src="${item.img}" alt="${item.title}"
                 style="width:100%; height:100%; object-fit:cover; display:block;"
                 onerror="this.parentElement.style.background='linear-gradient(135deg,#1a7c3e,#2ecc71)'; this.style.display='none'">
          </div>

          <!-- Konten teks dengan padding -->
          <div class="p-6">
            <h3 class="font-bold text-gray-800 text-base mb-3">${item.title}</h3>
            <p class="text-sm text-gray-700 leading-relaxed">${item.desc}</p>
          </div>

        </div>
      `).join('')}
    </div>
  </div>
</section>
`;