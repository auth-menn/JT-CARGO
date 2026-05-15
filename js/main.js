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

/* ── Scroll-to-top button ── */
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
scrollBtn.title = 'Kembali ke atas';
Object.assign(scrollBtn.style, {
  position:   'fixed',
  bottom:     '24px',
  right:      '24px',
  width:      '44px',
  height:     '44px',
  borderRadius: '50%',
  background: 'var(--green)',
  color:      '#fff',
  border:     'none',
  cursor:     'pointer',
  boxShadow:  '0 4px 16px rgba(0,0,0,.2)',
  opacity:    '0',
  transition: 'opacity .3s, transform .3s',
  zIndex:     '999',
  fontSize:   '14px',
});

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
  scrollBtn.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(10px)';
});

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
