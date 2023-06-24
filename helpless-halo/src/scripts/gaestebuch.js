// Array zur Speicherung der Gästebucheinträge
var eintraege = [];

// Funktion zum Hinzufügen eines Eintrags
function eintragHinzufuegen(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars

  // Formulardaten auslesen
  var name = document.getElementById("name").value;
  var nachricht = document.getElementById("nachricht").value;

  // Neuen Eintrag erstellen
  var eintrag = {
    name: name,
    nachricht: nachricht,
    zeitstempel: new Date().toLocaleString(),
  };

  // Eintrag zum Array hinzufügen
  eintraege.push(eintrag);

  // Gästebucheinträge anzeigen
  anzeigenEintraege();
  // Formular zurücksetzen
  document.getElementById("name").value = "";
  document.getElementById("nachricht").value = "";
}

// Funktion zum Anzeigen der Gästebucheinträge
function anzeigenEintraege() {
  var eintraegeDiv = document.getElementById("gaestebuchEintraege");
  eintraegeDiv.innerHTML = ""; // Zurücksetzen des Inhalts

  // Durchlaufe alle Einträge und erstelle HTML-Elemente für jeden Eintrag
  for (var i = 0; i < eintraege.length; i++) {
    var eintragDiv = document.createElement("div");
    eintragDiv.innerHTML =
      "<p><strong>Name:</strong> " +
      eintraege[i].name +
      "</p>" +
      "<p><strong>Nachricht:</strong> " +
      eintraege[i].nachricht +
      "</p>" +
      "<p><strong>Zeitpunkt:</strong> " +
      eintraege[i].zeitstempel +
      "</p>" +
      "<hr>";
    eintraegeDiv.appendChild(eintragDiv);
  }
}
