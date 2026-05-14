async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

// Load common components
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("header-placeholder", "header.html");
    await loadComponent("footer-placeholder", "footer.html");
});

// Mobile menu toggle
document.addEventListener("click", function(e) {
    if (e.target.id === "menuToggle") {
        document.getElementById("mobileMenu").classList.toggle("active");
    }
});
