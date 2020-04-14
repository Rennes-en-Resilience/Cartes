/* Style for https://perso.crans.org/besson/carte-confinement/ */

// https://leafletjs.com/examples/custom-icons/
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: "css/leaf-shadow.png",
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [ 4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: "css/leaf-green.png"});
var redIcon = new LeafIcon({iconUrl: "css/leaf-red.png"});
var orangeIcon = new LeafIcon({iconUrl: "css/leaf-orange.png"});

var lat_zero  = 48.11165;
var long_zero = -1.65732;

L.marker([ lat_zero + 0.001, long_zero + 0.001], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.").openPopup();
L.marker([ lat_zero - 0.001, long_zero + 0.001], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.").openPopup();
L.marker([ lat_zero - 0.001, long_zero - 0.001], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.").openPopup();
