/* ============================================
   MAIN JS — J&T Cargo Landing Page
   - Scroll-reveal animation (IntersectionObserver)
   - Active nav link highlight on scroll
   ============================================ */

/* ── Scroll-reveal ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

// Observe all .reveal elements (re-query after all section scripts run)
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Active nav link on scroll ── */
const sections   = document.querySelectorAll('section[id]');
const navLinks   = document.querySelectorAll('a.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.style.color = isActive ? 'var(--green)' : '';
          link.style.fontWeight = isActive ? '700' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* ── Float-in for stat cards (re-trigger for late-rendered elements) ── */
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}, 300);

/* ── Floating WhatsApp button (with pulse/signal ring) ── */
const waStyle = document.createElement('style');
waStyle.innerHTML = `
  #wa-float-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #16a34a;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(0,0,0,.22);
    z-index: 999;
    opacity: 0;
    transform: translateY(14px) scale(.9);
    transition: opacity .35s ease, transform .35s ease, box-shadow .25s ease;
    animation: waFloatBounce 2.6s ease-in-out infinite;
  }

  #wa-float-btn.wa-show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  #wa-float-btn:hover {
    box-shadow: 0 8px 26px rgba(0,0,0,.3);
  }

  #wa-float-btn svg {
    width: 28px;
    height: 28px;
    position: relative;
    z-index: 2;
  }

  /* Signal / pulse rings */
  #wa-float-btn .wa-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid rgba(22,163,74,.55);
    animation: waPulse 2.2s ease-out infinite;
    pointer-events: none;
  }

  #wa-float-btn .wa-ring.wa-ring-delay {
    animation-delay: 1.1s;
  }

  @keyframes waPulse {
    0%   { transform: scale(1);   opacity: .6; }
    100% { transform: scale(1.9); opacity: 0;  }
  }

  /* Gentle idle bounce so it "kedut-kedut" */
  @keyframes waFloatBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50%      { transform: translateY(-4px) scale(1.04); }
  }

  #wa-float-btn.wa-show:hover {
    animation-play-state: paused;
  }

  /* Click "signal" burst effect */
  #wa-float-btn .wa-click-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid rgba(22,163,74,.9);
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
  }

  #wa-float-btn .wa-click-ring.wa-click-active {
    animation: waClickBurst .6s ease-out;
  }

  @keyframes waClickBurst {
    0%   { opacity: .9; transform: scale(1); }
    100% { opacity: 0;  transform: scale(2.4); }
  }

  @media (prefers-reduced-motion: reduce) {
    #wa-float-btn,
    #wa-float-btn .wa-ring,
    #wa-float-btn .wa-click-ring {
      animation: none !important;
    }
  }
`;
document.head.appendChild(waStyle);

const waBtn = document.createElement('a');
waBtn.id = 'wa-float-btn';
waBtn.href = 'https://wa.me/6281233538858';
waBtn.target = '_blank';
waBtn.rel = 'noopener';
waBtn.setAttribute('aria-label', 'Chat via WhatsApp');
waBtn.innerHTML = `
  <span class="wa-ring"></span>
  <span class="wa-ring wa-ring-delay"></span>
  <span class="wa-click-ring"></span>
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7184 16.0889C20.6639 16.0628 18.6226 15.0576 18.2599 14.927C18.1118 14.8738 17.9532 14.8219 17.7844 14.8219C17.5088 14.8219 17.2772 14.9593 17.0969 15.2291C16.893 15.5322 16.2757 16.2538 16.085 16.4693C16.0601 16.4978 16.0261 16.5318 16.0057 16.5318C15.9874 16.5318 15.6715 16.4017 15.5759 16.3601C13.3862 15.4089 11.7241 13.1216 11.4962 12.7358C11.4636 12.6804 11.4622 12.6552 11.462 12.6552C11.47 12.6258 11.5436 12.552 11.5816 12.5139C11.6928 12.4039 11.8132 12.2589 11.9298 12.1187C11.985 12.0522 12.0402 11.9857 12.0945 11.9229C12.2636 11.7262 12.3389 11.5735 12.4262 11.3966L12.4719 11.3047C12.685 10.8813 12.503 10.524 12.4442 10.4087C12.3959 10.3121 11.534 8.23193 11.4423 8.01339C11.222 7.48602 10.9308 7.24048 10.5262 7.24048C10.4886 7.24048 10.5262 7.24048 10.3687 7.24711C10.177 7.25521 9.13288 7.39266 8.67124 7.68366C8.1817 7.9923 7.35352 8.97612 7.35352 10.7063C7.35352 12.2635 8.3417 13.7338 8.76597 14.2929C8.77652 14.307 8.79588 14.3357 8.82397 14.3768C10.4488 16.7497 12.4743 18.5082 14.5277 19.3285C16.5045 20.1181 17.4406 20.2094 17.9728 20.2094H17.9729C18.1965 20.2094 18.3755 20.1918 18.5334 20.1763L18.6336 20.1668C19.3165 20.1062 20.8172 19.3286 21.1586 18.3799C21.4275 17.6328 21.4984 16.8164 21.3195 16.5201C21.197 16.3187 20.9858 16.2173 20.7184 16.0889Z" fill="white"/>
    <path d="M14.2485 0C6.66525 0 0.495797 6.12309 0.495797 13.6494C0.495797 16.0836 1.14725 18.4665 2.38134 20.5519L0.0192516 27.5196C-0.0247484 27.6495 0.00797888 27.7932 0.10407 27.891C0.173433 27.9618 0.267524 28 0.363615 28C0.400433 28 0.437524 27.9945 0.473706 27.9829L7.73916 25.6742C9.72734 26.7365 11.9744 27.2972 14.2486 27.2972C21.8312 27.2973 28 21.1748 28 13.6494C28 6.12309 21.8312 0 14.2485 0ZM14.2485 24.454C12.1086 24.454 10.036 23.8361 8.25434 22.667C8.19443 22.6276 8.12489 22.6075 8.05489 22.6075C8.01789 22.6075 7.9808 22.6131 7.94471 22.6245L4.30516 23.7815L5.48007 20.3152C5.51807 20.203 5.49907 20.0793 5.42907 19.9836C4.07234 18.1298 3.35516 15.9395 3.35516 13.6494C3.35516 7.69091 8.24189 2.84327 14.2484 2.84327C20.2543 2.84327 25.1404 7.69091 25.1404 13.6494C25.1405 19.6071 20.2544 24.454 14.2485 24.454Z" fill="white"/>
  </svg>
`;

document.body.appendChild(waBtn);

// Fade/slide in shortly after load
requestAnimationFrame(() => {
  setTimeout(() => waBtn.classList.add('wa-show'), 150);
});

// Extra "signal burst" ring on click, before navigating to WhatsApp
waBtn.addEventListener('click', () => {
  const clickRing = waBtn.querySelector('.wa-click-ring');
  clickRing.classList.remove('wa-click-active');
  // force reflow so the animation can restart if clicked repeatedly
  void clickRing.offsetWidth;
  clickRing.classList.add('wa-click-active');
});