document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/cookieinfo.php?cdid=b018a967f10b6";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // API-Aufruf, um die Cookie-Infos zu erhalten
    fetch('https://delivery.consentmanager.net/delivery/cookieinfo.php?cdid=b018a967f10b6&api=json')
        .then(response => response.json())
        .then(data => {
            // Hier kannst du die erhaltenen Daten verarbeiten
            console.log(data);
            // Beispiel: Zeige die Cookie-Infos in der Konsole an
            displayCookieInfo(data);
        })
        .catch(error => console.error('Error fetching cookie info:', error));
});

function displayCookieInfo(data) {
    const cookieInfoContainer = document.getElementById('cmpcookieinfo');
    if (cookieInfoContainer) {
        cookieInfoContainer.innerHTML = ''; // Vorherigen Inhalt löschen
        data.forEach(cookie => {
            const cookieItem = document.createElement('div');
            cookieItem.textContent = `Name: ${cookie.name}, Purpose: ${cookie.purpose}, Expiry: ${cookie.expiry}`;
            cookieInfoContainer.appendChild(cookieItem);
        });
    } else {
        console.error('Element with id "cmpcookieinfo" not found.');
    }
}
