const script = document.createElement('script');
script.type = 'text/partytown';
script.innerHTML = `console.log("New partytown script!")`;
document.head.appendChild(script);

window.dispatchEvent(new CustomEvent('ptupdate'));