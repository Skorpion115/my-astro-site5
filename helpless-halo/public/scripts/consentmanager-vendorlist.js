document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.src = "https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // API-Aufruf, um die Liste der gefundenen Cookies zu erhalten
    fetch('https://delivery.consentmanager.net/delivery/vendorlist.php?cdid=b018a967f10b6&api=json')
        .then(response => response.json())
        .then(data => {
            // Hier kannst du die erhaltenen Daten verarbeiten
            console.log(data);
            // Beispiel: Zeige die Cookie-Liste in der Konsole an
            displayCookieList(data);
        })
        .catch(error => console.error('Error fetching vendor list:', error));
});

function displayCookieList(data) {
    const cookieListContainer = document.getElementById('cmpvendorlist');
    if (cookieListContainer) {
        cookieListContainer.innerHTML = ''; // Vorherigen Inhalt löschen
        data.forEach(cookie => {
            const cookieItem = document.createElement('div');
            cookieItem.textContent = `Name: ${cookie.name}, Domain: ${cookie.domain}, Expiry: ${cookie.expiry}`;
            cookieListContainer.appendChild(cookieItem);
        });
    } else {
        console.error('Element with id "cmpvendorlist" not found.');
    }
}