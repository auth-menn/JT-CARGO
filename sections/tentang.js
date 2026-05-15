document.getElementById('tentang-mount').innerHTML = `
<section id="tentang" style="
  font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;
  background:#ffffff;
  padding:80px 0;
">
  <div style="max-width:1100px; margin:0 auto; padding:0 24px; display:grid; grid-template-columns:1.5fr 1fr; gap:64px; align-items:center;">

    <!-- Kiri: Gambar -->
    <!-- Kiri: Gambar -->
<div>
  <div
    style="
      width: 100%;
      max-width: 900px;   /* memperbesar lebar container */
      height: 370px;      /* memperbesar tinggi container */
      margin: 0 auto;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,128,55,0.12);
    "
  >
    <img
      src="assets/about.png"
      alt="J&T Cargo Wonokromo"
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      "
    >
  </div>
</div>

    <!-- Kanan: Konten -->
    <div>
      <p style="color:#008037; font-weight:700; font-size:1.6rem; letter-spacing:0.08em; margin:0 0 12px 0;">Tentang Kami</p>

      <p style="color:#555; line-height:1.8; margin:0 0 32px 0;">
        J&T Cargo Wonokromo (SUB006A) adalah layanan pengiriman kargo terpercaya di Surabaya yang siap menangani kebutuhan kirim barang besar dan berat ke seluruh Indonesia. Didukung sistem logistik berbasis teknologi, setiap pengiriman menjadi lebih efisien, aman, dan mudah dipantau secara real-time.
        </p>

      <!-- Checklist -->
      <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:16px;">
        ${[
          'Jaringan pengiriman luas ke seluruh Indonesia',
          'Sistem logistik modern & profesional',
          'Tim profesional & berpengalaman',
        ].map(item => `
          <li style="display:flex; align-items:center; gap:14px; color:#222; font-weight:500; font-size:1rem;">
            <span style="width:20px; height:20px; border-radius:50%; background:#008037; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <svg width="26" height="26" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5256 23.1491L21.5211 14.2045C21.8007 13.9266 22.1564 13.7876 22.5884 13.7876C23.0204 13.7876 23.3761 13.9266 23.6557 14.2045C23.9352 14.4824 24.075 14.8362 24.075 15.2657C24.075 15.6953 23.9352 16.049 23.6557 16.327L13.5929 26.3328C13.288 26.636 12.9322 26.7876 12.5256 26.7876C12.119 26.7876 11.7633 26.636 11.4584 26.3328L7.49423 22.3911C7.21471 22.1132 7.07495 21.7594 7.07495 21.3299C7.07495 20.9003 7.21471 20.5466 7.49423 20.2686C7.77375 19.9907 8.12951 19.8517 8.5615 19.8517C8.99349 19.8517 9.34924 19.9907 9.62876 20.2686L12.5256 23.1491Z" fill="white"/>
              </svg>
            </span>
            ${item}
          </li>
        `).join('')}
      </ul>
    </div>

  </div>
</section>
`;