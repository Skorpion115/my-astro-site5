// JavaScript-Code für automatischen Bildlauf
const imageScroll1 = document.getElementById("imageScroll1");

// Funktion zum automatischen Wechseln der Bilder
function autoScroll(element) {
  let scrollAmount = 0;
  const scrollWidth = element.scrollWidth - element.clientWidth;

  const slideTimer = setInterval(function () {
    element.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });

    scrollAmount += element.clientWidth;

    if (scrollAmount >= scrollWidth) {
      scrollAmount = 0;
    }
  }, 6000);
}

// Automatischer Bildlauf beim Laden der Seite
window.addEventListener("load", function () {
  autoScroll(imageScroll1);
});