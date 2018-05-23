//leaflet map
var apecmap = L.map('mapid').setView([-6.72811, 147.00072], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(apecmap);