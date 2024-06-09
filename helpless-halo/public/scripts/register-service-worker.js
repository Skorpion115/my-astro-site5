document.addEventListener("DOMContentLoaded", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceWorker.js", { scope: "/" })
        .then(() => console.log("serviceWorker registered"))
        .catch((error) => console.warn(error));
    }
  });