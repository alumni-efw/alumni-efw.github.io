async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

// Load common components
document.addEventListener("DOMContentLoaded", async () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", (e) => {
    if (e.target.id === "menuToggle") {
      if (siteNav) {
        //toggle menu
        siteNav.classList.toggle("active");

        // change icon
        if (siteNav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-expanded", "true");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    }
  });

  // window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {

        siteNav.classList.remove("active");

        // reset icon
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }
  });
  //control carousel
  initHeroCarousel();

});

document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

function initHeroCarousel() {
  const track   = document.getElementById('track');
  const dotsEl  = document.getElementById('dots');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (!track || !dotsEl) return;

  const slides = track.querySelectorAll('.carousel-slide');

  if(!slides.length) return;

  const total  = slides.length;
  let current  = 0;
  let autoTimer = null;
  let touchStartX = 0;
  let dots;

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', `Go to slide ${i + 1}`);
    d.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    d.setAttribute('tabindex', i === 0 ? '0' : '-1');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });

  dots = dotsEl.querySelectorAll('.dot');

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', String(i === current));
      d.setAttribute('tabindex', i === current ? '0' : '-1');
    });
  }

  prevBtn?.addEventListener('click', () => {
    goTo(current - 1);
    resetAuto();
  });
  nextBtn?.addEventListener('click', () => {
    goTo(current + 1)
    resetAuto();
  });

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }
  startAuto();

  // Keyboard
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Mobile Swipe
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;

    if (Math.abs(dx) < 40) return;
    if(dx > 0){
      goTo(current-1);
    } else {
      goTo(current+1);
    }
  }, { passive: true });

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    startAuto();
  });
}
