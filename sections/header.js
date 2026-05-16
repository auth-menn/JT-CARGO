/* ============================================
   STYLES : BUTTON + NAV LINK + MOBILE MENU
   ============================================ */

const style = document.createElement('style');

style.innerHTML = `

/* ---------- Button ---------- */
.btn-kirim {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  height: 44px;
  padding: 0 20px;
  border-radius: 9999px;
  background: #16a34a;
  color: white;
  font-size: .92rem;
  font-weight: 600;
  transition: all .3s ease;
}

.btn-kirim:hover {
  background: #15803d;
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(22,163,74,.25);
}

/* ---------- Desktop nav underline ---------- */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: #16a34a;
  transition: .3s ease;
}

.nav-link:hover::after {
  width: 100%;
}


/* ============================================================
   MOBILE MENU — ELEGANT FULL-SCREEN DRAWER
   ============================================================ */

/* --- Overlay backdrop --- */
#mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  z-index: 998;
  transition: background .35s ease, backdrop-filter .35s ease;
}

#mobile-overlay.open {
  display: block;
  background: rgba(0, 0, 0, .35);
  backdrop-filter: blur(4px);
}

/* --- Drawer panel --- */
#mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: min(340px, 88vw);
  height: 100dvh;
  z-index: 999;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: -20px 0 60px rgba(0,0,0,.12);

  transition: right .38s cubic-bezier(.4, 0, .2, 1);
  overflow-y: auto;
  overflow-x: hidden;
}

#mobile-menu.open {
  right: 0;
}

/* --- Drawer header bar --- */
.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px 16px;
  border-bottom: 1px solid #f1f5f9;
  flex-shrink: 0;
}

.mobile-menu-brand {
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #16a34a;
}

/* Close button */
.mobile-close-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #f1f5f9;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background .2s ease, transform .2s ease;
}

.mobile-close-btn:hover {
  background: #e2e8f0;
  transform: rotate(90deg);
}

.mobile-close-btn:active {
  transform: rotate(90deg) scale(.9);
}

/* --- Nav items wrapper --- */
.mobile-nav-list {
  display: flex;
  flex-direction: column;
  padding: 18px 16px;
  gap: 4px;
  flex: 1;
}

/* --- Individual nav link --- */
#mobile-menu .mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  font-size: .96rem;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  position: relative;
  transition: background .2s ease, color .2s ease, transform .15s ease;
  overflow: hidden;
}

#mobile-menu .mobile-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0%;
  border-radius: 0 4px 4px 0;
  background: #16a34a;
  transition: height .25s ease;
}

#mobile-menu .mobile-nav-link:hover {
  background: #f0fdf4;
  color: #15803d;
  transform: translateX(4px);
}

#mobile-menu .mobile-nav-link:hover::before {
  height: 60%;
}

#mobile-menu .mobile-nav-link:active {
  transform: translateX(4px) scale(.98);
}

/* link icon dot */
.nav-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d1fae5;
  flex-shrink: 0;
  transition: background .2s ease;
}

#mobile-menu .mobile-nav-link:hover .nav-dot {
  background: #16a34a;
}

/* --- Divider --- */
.mobile-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 6px 16px;
}

/* --- Footer CTA --- */
.mobile-menu-footer {
  padding: 16px 16px 32px;
  border-top: 1px solid #f1f5f9;
  flex-shrink: 0;
}

#mobile-menu .btn-kirim {
  width: 100%;
  height: 52px;
  border-radius: 16px;
  font-size: .95rem;
  gap: .75rem;
}

/* Stagger animation for nav items */
@keyframes slideInItem {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

#mobile-menu.open .mobile-nav-link,
#mobile-menu.open .mobile-divider,
#mobile-menu.open .btn-kirim {
  animation: slideInItem .3s ease both;
}

#mobile-menu.open .mobile-nav-link:nth-child(1)  { animation-delay: .08s; }
#mobile-menu.open .mobile-nav-link:nth-child(2)  { animation-delay: .13s; }
#mobile-menu.open .mobile-nav-link:nth-child(3)  { animation-delay: .17s; }
#mobile-menu.open .mobile-nav-link:nth-child(4)  { animation-delay: .21s; }
#mobile-menu.open .mobile-nav-link:nth-child(5)  { animation-delay: .25s; }
#mobile-menu.open .mobile-nav-link:nth-child(6)  { animation-delay: .29s; }
#mobile-menu.open .btn-kirim                     { animation-delay: .34s; }


/* ---------- Tablet ---------- */
@media (max-width: 1024px) {
  #navbar .max-w-7xl {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

/* ---------- Mobile ---------- */
@media (max-width: 768px) {
  #navbar {
    backdrop-filter: blur(14px);
  }

  #navbar .max-w-7xl {
    height: 64px !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
    position: relative;
    z-index: 1001;
  }

  #navbar svg {
    max-width: 120px;
    height: auto;
  }

  #menu-toggle {
    padding: 6px;
    border-radius: 10px;
    transition: .2s ease;
    z-index: 1002;
  }

  #menu-toggle:active {
    transform: scale(.95);
  }
}

`;

document.head.appendChild(style);


/* ============================================
   HTML : HEADER MOUNT
   ============================================ */

document.getElementById('header-mount').innerHTML = `

<!-- Backdrop Overlay -->
<div id="mobile-overlay"></div>

<header
  id="navbar"
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
  style="background:rgba(255,255,255,0.97); backdrop-filter:blur(12px);"
>
  <div class="max-w-7xl mx-auto pl-0 pr-5 h-16 flex items-center">

    <!-- LEFT : LOGO -->
    <div class="flex items-center flex-shrink-0">
      <a href="#home" class="flex items-center" style="color:var(--green)">
        <svg width="150" height="40" viewBox="0 0 244 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 0H40.1572L29.8153 44.9531H5.721L0 56H43.3477L56 0Z" fill="#008037"/>
          <path d="M146.088 10.8949L148.158 8.607H164.393L167.225 5.77431H151.318L153.388 3.48636H169.513L173 0H107.954L100 15.035H124.515L114.382 56H129.636L139.987 15.035H157.964L162.104 10.8949H146.088Z" fill="#008037"/>
          <path d="M100.128 44.1245C100.128 44.1245 105.986 35.9533 105.986 28.6537C95.2465 25.3852 94.9211 25.1673 94.9211 25.1673C94.9211 25.1673 95.2465 30.179 92.7515 34.428C91.8836 34.3191 90.9073 33.2296 89.8225 32.358C88.7377 31.4864 79.6253 22.5525 78.5404 20.7004C77.4556 18.8483 76.6962 17.1051 76.6962 14.8171C76.6962 12.6381 79.2998 7.19067 85.2663 7.19067C87.6529 7.19067 93.4024 8.60699 91.3412 14.9261C96.3314 6.2101 99.6943 0 99.6943 0H64.2209L63.1361 3.92219C63.1361 3.92219 59.9902 14.2724 68.2347 22.6615C68.2347 22.6615 55 31.0506 55 41.1829C55 51.3152 64.9803 56 76.5878 56C80.1677 56 88.1953 54.8016 92.3176 52.4047L95.355 55.7821H110L100.128 44.1245ZM77.1302 46.7393C72.6825 46.7393 68.0177 43.7977 68.0177 40.2023C68.0177 37.8054 70.2958 34.428 75.3945 31.5953L85.9172 44.0156C85.8087 44.0156 81.5779 46.7393 77.1302 46.7393Z" fill="#008037"/>
          <path d="M178.361 34H172.133L162 56H166.856L169.283 50.3618H175.3L175.933 56H181L178.361 34ZM170.656 46.603L172.661 41.9598C173.189 40.6332 173.822 38.9749 174.35 37.7588H174.456C174.561 39.0854 174.667 40.7437 174.772 41.9598L175.3 46.603H170.656Z" fill="#008037"/>
          <path d="M194.241 34C191.654 34 189.39 34.22 187.773 34.44L184 56H188.743L190.252 47.42H191.654C193.594 47.42 194.349 48.19 194.457 50.94C194.565 53.58 194.78 55.34 195.104 56H200.062C199.847 55.12 199.631 52.26 199.416 49.84C199.2 47.86 198.661 46.32 197.26 45.77V45.66C199.2 45 201.464 43.02 201.895 40.27C202.218 38.29 201.787 36.75 200.709 35.65C199.416 34.44 197.367 34 194.241 34ZM197.044 40.71C196.721 42.58 195.103 43.9 192.732 43.9H190.791L191.869 37.85C192.193 37.74 192.947 37.74 194.025 37.74C196.289 37.63 197.475 38.62 197.044 40.71Z" fill="#008037"/>
          <path d="M235.97 34C229.99 34 225.292 38.8293 224.224 45.161C223.156 51.278 225.933 56 231.912 56C237.785 56 242.59 51.7073 243.765 44.7317C244.833 38.8293 242.27 34 235.97 34ZM238.96 44.9464C238.212 49.1317 235.97 52.2439 232.873 52.2439C229.777 52.2439 228.495 49.3463 229.136 45.161C229.884 40.9756 232.126 37.8634 235.222 37.8634C238.426 37.7561 239.6 41.0829 238.96 44.9464Z" fill="#008037"/>
          <path d="M160.51 38.0297C161.524 38.0297 162.424 38.1386 163.099 38.3564L164 34.3268C163.212 34.1089 162.086 34 160.961 34C154.432 34 148.578 38.0297 147.228 45.3267C146.102 51.4257 149.141 56 156.571 56C157.809 56 158.934 55.8911 159.835 55.6732L160.623 51.9703L160.736 51.6436C159.948 51.8614 158.934 51.9703 158.147 51.9703C154.432 51.9703 152.406 50.0099 152.406 46.6337C152.406 46.0891 152.406 45.5446 152.518 45C153.194 40.3168 156.683 38.0297 160.51 38.0297Z" fill="#008037"/>
          <path d="M223 35C223 35 222.636 34.5 222 34C222.545 34.5 223 35 223 35Z" fill="#008037"/>
          <path d="M210.794 35.8745C207.337 37.7339 204.852 41.1246 204.204 45.0622C204.204 45.0622 204.204 45.0622 204.204 45.1716C203.664 48.3436 204.204 51.1874 205.717 53.0468C207.229 55.0156 209.605 56 213.062 56C215.655 56 218.247 55.3438 219.759 54.7969L221.596 43.3122H214.79L214.142 47.1404H216.951L216.195 51.7343C215.871 51.953 214.574 52.0624 213.602 52.0624C210.902 52.0624 208.957 50.5311 208.633 47.7967C208.633 47.5779 208.633 47.4685 208.633 47.2498C208.633 42.3278 211.334 40.1402 211.334 40.1402C211.55 39.9215 211.658 39.8121 211.874 39.5933C211.874 39.5933 213.386 37.9527 217.167 37.8433C218.247 37.8433 219.435 37.8433 220.84 38.0621C221.272 38.1714 221.812 38.2808 222.244 38.3902L223 34.562C223 34.562 222.568 34.4526 221.812 34.3432C219.759 33.9057 215.114 33.4682 210.794 35.8745Z" fill="#008037"/>
        </svg>
      </a>
    </div>

    <!-- CENTER : Desktop Menu -->
    <div class="hidden md:flex flex-1 justify-center pr-24">
      <nav class="flex items-center gap-10 text-sm font-semibold text-gray-700">
        <a href="#home"       class="nav-link hover:text-green-700 transition-colors">Beranda</a>
        <a href="#tentang"    class="nav-link hover:text-green-700 transition-colors">Tentang Kami</a>
        <a href="#keunggulan" class="nav-link hover:text-green-700 transition-colors">Keunggulan</a>
        <a href="#layanan"    class="nav-link hover:text-green-700 transition-colors">Layanan</a>
        <a href="#carakirim"  class="nav-link hover:text-green-700 transition-colors">Cara Kirim</a>
        <a href="#kontak"     class="nav-link hover:text-green-700 transition-colors">Kontak</a>
      </nav>
    </div>

    <!-- RIGHT : CTA + Hamburger -->
    <div class="flex items-center gap-3 ml-auto mr-0">

      <!-- Desktop Button -->
      <div class="hidden md:flex items-center">
        <a href="https://wa.me/6281233538858" target="_blank" class="btn-kirim">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7184 16.0889C20.6639 16.0628 18.6226 15.0576 18.2599 14.927C18.1118 14.8738 17.9532 14.8219 17.7844 14.8219C17.5088 14.8219 17.2772 14.9593 17.0969 15.2291C16.893 15.5322 16.2757 16.2538 16.085 16.4693C16.0601 16.4978 16.0261 16.5318 16.0057 16.5318C15.9874 16.5318 15.6715 16.4017 15.5759 16.3601C13.3862 15.4089 11.7241 13.1216 11.4962 12.7358C11.4636 12.6804 11.4622 12.6552 11.462 12.6552C11.47 12.6258 11.5436 12.552 11.5816 12.5139C11.6928 12.4039 11.8132 12.2589 11.9298 12.1187C11.985 12.0522 12.0402 11.9857 12.0945 11.9229C12.2636 11.7262 12.3389 11.5735 12.4262 11.3966L12.4719 11.3047C12.685 10.8813 12.503 10.524 12.4442 10.4087C12.3959 10.3121 11.534 8.23193 11.4423 8.01339C11.222 7.48602 10.9308 7.24048 10.5262 7.24048C10.4886 7.24048 10.5262 7.24048 10.3687 7.24711C10.177 7.25521 9.13288 7.39266 8.67124 7.68366C8.1817 7.9923 7.35352 8.97612 7.35352 10.7063C7.35352 12.2635 8.3417 13.7338 8.76597 14.2929C8.77652 14.307 8.79588 14.3357 8.82397 14.3768C10.4488 16.7497 12.4743 18.5082 14.5277 19.3285C16.5045 20.1181 17.4406 20.2094 17.9728 20.2094H17.9729C18.1965 20.2094 18.3755 20.1918 18.5334 20.1763L18.6336 20.1668C19.3165 20.1062 20.8172 19.3286 21.1586 18.3799C21.4275 17.6328 21.4984 16.8164 21.3195 16.5201C21.197 16.3187 20.9858 16.2173 20.7184 16.0889Z" fill="white"/>
            <path d="M14.2485 0C6.66525 0 0.495797 6.12309 0.495797 13.6494C0.495797 16.0836 1.14725 18.4665 2.38134 20.5519L0.0192516 27.5196C-0.0247484 27.6495 0.00797888 27.7932 0.10407 27.891C0.173433 27.9618 0.267524 28 0.363615 28C0.400433 28 0.437524 27.9945 0.473706 27.9829L7.73916 25.6742C9.72734 26.7365 11.9744 27.2972 14.2486 27.2972C21.8312 27.2973 28 21.1748 28 13.6494C28 6.12309 21.8312 0 14.2485 0ZM14.2485 24.454C12.1086 24.454 10.036 23.8361 8.25434 22.667C8.19443 22.6276 8.12489 22.6075 8.05489 22.6075C8.01789 22.6075 7.9808 22.6131 7.94471 22.6245L4.30516 23.7815L5.48007 20.3152C5.51807 20.203 5.49907 20.0793 5.42907 19.9836C4.07234 18.1298 3.35516 15.9395 3.35516 13.6494C3.35516 7.69091 8.24189 2.84327 14.2484 2.84327C20.2543 2.84327 25.1404 7.69091 25.1404 13.6494C25.1405 19.6071 20.2544 24.454 14.2485 24.454Z" fill="white"/>
          </svg>
          <span>Chat Whatsapp</span>
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        id="menu-toggle"
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span class="block w-6 h-0.5 bg-gray-700 transition-all duration-300" id="bar1"></span>
        <span class="block w-6 h-0.5 bg-gray-700 transition-all duration-300" id="bar2"></span>
        <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300" id="bar3"></span>
      </button>

    </div>
  </div>
</header>

<!-- Spacer -->
<div class="h-16"></div>

<!-- ===== MOBILE DRAWER MENU ===== -->
<nav id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu navigasi">

  <!-- Drawer Header -->
  <div class="mobile-menu-header">
    <span class="mobile-menu-brand">Menu</span>
    <button class="mobile-close-btn" id="mobile-close" aria-label="Tutup menu">
      <!-- X icon -->
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L14 14M14 2L2 14" stroke="#374151" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Nav Links -->
  <div class="mobile-nav-list">

    <a href="#home" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Beranda
    </a>

    <a href="#tentang" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Tentang Kami
    </a>

    <a href="#keunggulan" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Keunggulan
    </a>

    <a href="#layanan" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Layanan
    </a>

    <a href="#carakirim" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Cara Kirim
    </a>

    <a href="#kontak" class="mobile-nav-link">
      <span class="nav-dot"></span>
      Kontak
    </a>

  </div>

  <!-- Footer CTA -->
  <div class="mobile-menu-footer">
    <a href="https://wa.me/6281233538858" target="_blank" class="btn-kirim">
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7184 16.0889C20.6639 16.0628 18.6226 15.0576 18.2599 14.927C18.1118 14.8738 17.9532 14.8219 17.7844 14.8219C17.5088 14.8219 17.2772 14.9593 17.0969 15.2291C16.893 15.5322 16.2757 16.2538 16.085 16.4693C16.0601 16.4978 16.0261 16.5318 16.0057 16.5318C15.9874 16.5318 15.6715 16.4017 15.5759 16.3601C13.3862 15.4089 11.7241 13.1216 11.4962 12.7358C11.4636 12.6804 11.4622 12.6552 11.462 12.6552C11.47 12.6258 11.5436 12.552 11.5816 12.5139C11.6928 12.4039 11.8132 12.2589 11.9298 12.1187C11.985 12.0522 12.0402 11.9857 12.0945 11.9229C12.2636 11.7262 12.3389 11.5735 12.4262 11.3966L12.4719 11.3047C12.685 10.8813 12.503 10.524 12.4442 10.4087C12.3959 10.3121 11.534 8.23193 11.4423 8.01339C11.222 7.48602 10.9308 7.24048 10.5262 7.24048C10.4886 7.24048 10.5262 7.24048 10.3687 7.24711C10.177 7.25521 9.13288 7.39266 8.67124 7.68366C8.1817 7.9923 7.35352 8.97612 7.35352 10.7063C7.35352 12.2635 8.3417 13.7338 8.76597 14.2929C8.77652 14.307 8.79588 14.3357 8.82397 14.3768C10.4488 16.7497 12.4743 18.5082 14.5277 19.3285C16.5045 20.1181 17.4406 20.2094 17.9728 20.2094H17.9729C18.1965 20.2094 18.3755 20.1918 18.5334 20.1763L18.6336 20.1668C19.3165 20.1062 20.8172 19.3286 21.1586 18.3799C21.4275 17.6328 21.4984 16.8164 21.3195 16.5201C21.197 16.3187 20.9858 16.2173 20.7184 16.0889Z" fill="white"/>
        <path d="M14.2485 0C6.66525 0 0.495797 6.12309 0.495797 13.6494C0.495797 16.0836 1.14725 18.4665 2.38134 20.5519L0.0192516 27.5196C-0.0247484 27.6495 0.00797888 27.7932 0.10407 27.891C0.173433 27.9618 0.267524 28 0.363615 28C0.400433 28 0.437524 27.9945 0.473706 27.9829L7.73916 25.6742C9.72734 26.7365 11.9744 27.2972 14.2486 27.2972C21.8312 27.2973 28 21.1748 28 13.6494C28 6.12309 21.8312 0 14.2485 0ZM14.2485 24.454C12.1086 24.454 10.036 23.8361 8.25434 22.667C8.19443 22.6276 8.12489 22.6075 8.05489 22.6075C8.01789 22.6075 7.9808 22.6131 7.94471 22.6245L4.30516 23.7815L5.48007 20.3152C5.51807 20.203 5.49907 20.0793 5.42907 19.9836C4.07234 18.1298 3.35516 15.9395 3.35516 13.6494C3.35516 7.69091 8.24189 2.84327 14.2484 2.84327C20.2543 2.84327 25.1404 7.69091 25.1404 13.6494C25.1405 19.6071 20.2544 24.454 14.2485 24.454Z" fill="white"/>
      </svg>
      <span>Chat Whatsapp</span>
    </a>
  </div>

</nav>
`;


/* ============================================
   LOGIC : OPEN / CLOSE MOBILE MENU
   ============================================ */

const toggle      = document.getElementById('menu-toggle');
const mobileMenu  = document.getElementById('mobile-menu');
const overlay     = document.getElementById('mobile-overlay');
const closeBtn    = document.getElementById('mobile-close');

const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

function openMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';   // prevent scroll behind
  toggle.setAttribute('aria-expanded', 'true');

  // Animate hamburger → X
  bar1.style.transform = 'translateY(8px) rotate(45deg)';
  bar2.style.opacity   = '0';
  bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
  bar3.style.width     = '24px';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  toggle.setAttribute('aria-expanded', 'false');

  // Reset hamburger
  bar1.style.transform = '';
  bar2.style.opacity   = '';
  bar3.style.transform = '';
  bar3.style.width     = '';
}

/* Hamburger toggle */
toggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

/* Close button inside drawer */
closeBtn.addEventListener('click', closeMenu);

/* Clicking overlay closes menu */
overlay.addEventListener('click', closeMenu);

/* Nav links close menu on click */
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

/* ESC key closes menu */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
  }
});


/* ============================================
   NAVBAR SHADOW ON SCROLL
   ============================================ */

window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.style.boxShadow = window.scrollY > 20
    ? '0 4px 30px rgba(0,0,0,.08)'
    : 'none';
});