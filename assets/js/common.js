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
        //toggle menu
        siteNav.classList.toggle("active");

        // change icon
        if (siteNav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }
      }
    }
  });

  // window resize
  window.addEventListener("resize", () => {
    const siteNav = document.getElementById("siteNav");

    if (window.innerWidth > 768) {

        siteNav.classList.remove("active");

        // reset icon
        menuToggle.innerHTML = "☰";
    }
  });
});
