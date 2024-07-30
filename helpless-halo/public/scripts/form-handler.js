// public/form-handler.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[name="contact_4"]');
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert die Standard-Formular-Submit-Aktion
  
        const formData = new FormData(form);
  
        fetch('/contact_4/', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            // Weiterleitung bei Erfolg
            window.location.href = '/danke-seite/';
          } else {
            // Fehlerbehandlung
            console.error('Formularübermittlung fehlgeschlagen');
          }
        })
        .catch(error => console.error('Fehler:', error));
      });
    }
  });
  