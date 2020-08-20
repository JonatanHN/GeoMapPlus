// map
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success)
}else{
    alert('No puedes obtener GEO');
}

function success(geolocationPosition) {
    let coords = geolocationPosition.coords;
    let time = geolocationPosition.timestamp;
    document.getElementById('mapdata').innerHTML = '<div class="datamap"><b>Latitud: ' + coords.latitude + '</b><b> Longitud: '+ coords.longitude +'</b>' + '<b> Hora: ' + time + '</b></div>';
    console.log(geolocationPosition);
    var map = L.map('map').
setView([coords.latitude, coords.longitude],
9);
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);
var iconJHN = L.icon({
    iconUrl: 'https://jonatanhn.github.io/GeoMapPlus/punto.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [90, 90], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [50, 115], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker([coords.latitude, coords.longitude], {icon: iconJHN}).addTo(map);

var circle = L.circle([coords.latitude, coords.longitude], {
    color: '#222',
    fillColor: '#222',
    fillOpacity: 0.5,
    radius: 25000
}).addTo(map);
}
