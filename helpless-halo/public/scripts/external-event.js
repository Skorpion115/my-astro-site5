function cmp_expandvendor(vendorId) {
    const details = document.getElementById(`cmpvendordetails${vendorId}`);
    const icon = document.getElementById(`cmpexpandicon${vendorId}`);
    
    if (details.style.display === "none") {
        details.style.display = "block";
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;
    } else {
        details.style.display = "none";
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const vendorHeaders = document.querySelectorAll(".cmpvendorlistheader");
    vendorHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const vendorId = header.getAttribute("data-vendor-id");
            cmp_expandvendor(vendorId);
        });
    });
});
