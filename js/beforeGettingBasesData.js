// Useful functions before getting the data for offices and rebel bases

var lat_zero  = (0 in center) ? center[0] : default_lat;
var long_zero  = (1 in center) ? center[1] : default_long;

// https://leafletjs.com/examples/custom-icons/
var OfficeIcon = L.Icon.extend({
    options: {
        iconSize:     [64, 64],
        iconAnchor:   [32, 32],
        popupAnchor:  [0, 0]
    }
});
var OfficeIcon_rectangle = OfficeIcon.extend({
    options: {
        iconSize:     [64, 32],
    }
});
var smallIcon = OfficeIcon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
    }
});
var verySmallIcon = OfficeIcon.extend({
    options: {
        iconSize:     [16, 16],
        iconAnchor:   [8, 8],
    }
});
var smallIcon_rectangle = OfficeIcon.extend({
    options: {
        iconSize:     [32, 16],
        iconAnchor:   [8, 8],
    }
});

/**
* Return a uniform random element from the input array
* @param  {Array} myArray The non-empty input array
* @return {Object}     The random element
*/
var random_pick = function(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
};


/**
* Add one base object to the map
* @param  {Object} base The base object (containing at least coordinate, icon and legend attributes)
* @param  {Boolean} openPopup Whether to open the popup or not
* @return {Object}     The marker object from Leaflet.js
*/
var add_one_base = function(base, openPopup) {
    var coordinate = base.coordinate;
    var icon = base.icon;
    var legend = base.legend;
    console.log("Ajout d'une base aux coordonnées ", coordinate, " avec l'icône ", icon, " et la légende ", legend);  // DEBUG
    var marker = L.marker(coordinate, {icon: icon});
    marker.addTo(whole_france);
    marker.bindPopup(legend);
    if (openPopup) { marker.openPopup() };
    return marker;
};


/**
* Add one random base object to the map, from a list of bases
* @param  {Array} bases List of base objects
* @param  {Boolean} openPopup Whether to open the popup or not
* @return {Object}     The marker object from Leaflet.js
*/
var add_random_base = function(bases, openPopup) {
    var random_base = random_pick(bases);
    var marker = add_one_base(random_base, openPopup);
    return marker;
};

/**
* Add one random base object to the map, from a list of bases
* @param  {Array} bases List of base objects
* @return {Object}     The marker object from Leaflet.js
*/
var add_all_bases = function(bases) {
    var markers = [];
    for (var i = 0; i < bases.length; i++) {
        // console.log("Ajout de la base ", i, " / ", bases.length, " = ", bases[i]);
        markers.push(add_one_base(bases[i]));
    };
    return markers;
};

// DONE add a nice icon to my offices, with image as the logo of the building
var rebelIcon = new OfficeIcon({iconUrl: "css/Logo_ReR.png"});
var justSmallIcon = new smallIcon();
// var rebelSmallIcon = new smallIcon({iconUrl: "css/Logo_ReR.png"});
var rebelSmallIcon = new verySmallIcon({iconUrl: "css/Logo_ReR.png"});
var Inria_Icon = new OfficeIcon_rectangle({iconUrl: "css/Logo_Inria.png"});
var ENSR_Icon = new smallIcon({iconUrl: "css/Logo_ENSRennes.png"});
var CentraleSupelec_Icon = new smallIcon_rectangle({iconUrl: "css/Logo_CentraleSupelec.png"});

// DONE add a nice icon to my offices, with image as the logo of the building
// DONE use absolute coordinates for other points?
L.marker([ 48.11165, -1.65732], {icon: rebelSmallIcon}).addTo(whole_france).bindPopup("Centre de la carte.").openPopup();