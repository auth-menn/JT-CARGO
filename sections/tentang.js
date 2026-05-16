document.getElementById('tentang-mount').innerHTML = `
<style>
  .tentang-section {
    font-family: 'Plus Jakarta Sans', Helvetica, Arial, sans-serif;
    background: #ffffff;
    padding: 80px 0;
  }

  .tentang-grid {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 64px;
    align-items: center;
  }

  .tentang-img-wrap {
    width: 100%;
    max-width: 900px;
    height: 370px;
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,128,55,0.12);
  }

  .tentang-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tentang-label {
    color: #008037;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 0.08em;
    margin: 0 0 12px 0;
  }

  .tentang-desc {
    color: #555;
    line-height: 1.8;
    margin: 0 0 32px 0;
  }

  .tentang-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .tentang-list li {
    display: flex;
    align-items: center;
    gap: 14px;
    color: #222;
    font-weight: 500;
    font-size: 1rem;
  }

  .tentang-check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #008037;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ═══════════════════════════════
     TABLET — max-width: 1024px
  ═══════════════════════════════ */
  @media (max-width: 1024px) {
    .tentang-section {
      padding: 60px 0;
    }

    .tentang-grid {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .tentang-img-wrap {
      height: 300px;
    }

    .tentang-label {
      font-size: 1.3rem;
    }

    .tentang-desc {
      font-size: 0.92rem;
      margin: 0 0 24px 0;
    }

    .tentang-list li {
      font-size: 0.92rem;
    }
  }

  /* ═══════════════════════════════
     MOBILE — max-width: 640px
  ═══════════════════════════════ */
  @media (max-width: 640px) {
    .tentang-section {
      padding: 40px 0;
    }

    .tentang-grid {
      grid-template-columns: 1fr;
      gap: 28px;
      padding: 0 16px;
    }

    /* Gambar ke atas, teks ke bawah */
    .tentang-img-col {
      order: 1;
    }

    .tentang-content-col {
      order: 2;
    }

    .tentang-img-wrap {
      height: 220px;
      border-radius: 10px;
      object-position: center top;
    }

    .tentang-img-wrap img {
      object-position: center top;
    }

    .tentang-label {
      font-size: 1.2rem;
      margin: 0 0 10px 0;
    }

    .tentang-desc {
      font-size: 0.9rem;
      line-height: 1.75;
      margin: 0 0 20px 0;
    }

    .tentang-list {
      gap: 12px;
    }

    .tentang-list li {
      font-size: 0.9rem;
      gap: 10px;
    }
  }
</style>

<section id="tentang" class="tentang-section">
  <div class="tentang-grid">

    <!-- Kiri: Gambar -->
    <div class="tentang-img-col">
      <div class="tentang-img-wrap">
        <img src="assets/about.png" alt="J&T Cargo Wonokromo">
      </div>
    </div>

    <!-- Kanan: Konten -->
    <div class="tentang-content-col">
      <p class="tentang-label">Tentang Kami</p>

      <p class="tentang-desc">
        J&amp;T Cargo Wonokromo (SUB006A) adalah layanan pengiriman kargo terpercaya di Surabaya yang siap menangani kebutuhan kirim barang besar dan berat ke seluruh Indonesia. Didukung sistem logistik berbasis teknologi, setiap pengiriman menjadi lebih efisien, aman, dan mudah dipantau secara real-time.
      </p>

      <ul class="tentang-list">
        ${[
          'Jaringan pengiriman luas ke seluruh Indonesia',
          'Sistem logistik modern & profesional',
          'Tim profesional & berpengalaman',
        ].map(item => `
          <li>
            <span class="tentang-check">
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