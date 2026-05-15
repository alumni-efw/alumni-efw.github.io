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

  menuToggle.addEventListener("click", (e) => {
    if (e.target.id === "menuToggle") {
      const siteNav = document.getElementById("siteNav");

      if (siteNav) {
          siteNav.classList.toggle("active");
      }
    }
  });

  // window resize
  window.addEventListener("resize", () => {
      if (window.innerWidth > 600) {
        const siteNav = document.getElementById("siteNav");

        if (siteNav) {
            siteNav.classList.remove("active");
        }
      }
  });
});
