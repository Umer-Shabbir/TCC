document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".mobile-nav-toggle"),
        t = document.querySelector(".top-nav-links");
    e.addEventListener("click", () => {
        "false" === t.getAttribute("data-visible") ? t.setAttribute("data-visible", "true") : t.setAttribute("data-visible", "false");
    });
});
