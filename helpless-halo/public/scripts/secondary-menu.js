document.addEventListener("astro:page-load", () => {
  document
    .querySelector(".hamburger-secondary")
    .addEventListener("click", function () {
      document
        .querySelector(".nav-links-secondary")
        .classList.toggle("expanded");
    });
});

