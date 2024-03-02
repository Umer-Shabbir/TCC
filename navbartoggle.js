document.addEventListener("DOMContentLoaded", () => {
    let navToggle = document.querySelector(".mobile-nav-toggle");
    let navLinks = document.querySelector(".top-nav-links");
  
    navToggle.addEventListener("click", () => {
      console.log("Button clicked!");
      let visibility = navLinks.getAttribute("data-visible");
      if (visibility === "false") {
        navLinks.setAttribute("data-visible", "true");

      } else {
        navLinks.setAttribute("data-visible", "false");
      }
    });
  });
  