document.addEventListener("astro:page-load", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("expanded");
      hamburger.classList.toggle("active"); // Toggle der aktiven Klasse
    });
  }
});
