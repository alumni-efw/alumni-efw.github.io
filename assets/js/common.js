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
});

document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});
