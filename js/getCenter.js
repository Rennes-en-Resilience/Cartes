// Get the coordinates of the center of the map, and sets some default variables

/**
* Get the URL parameters
* source: https://css-tricks.com/snippets/javascript/get-url-variables/
* @param  {String} url The URL
* @return {Object}     The URL parameters
*/
var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

var default_lat = 48.11165;
var default_long = -1.65732;

var lat = default_lat;
var long = default_long;

var url = window.location.href;
var params = getParams(url);


// Add a dark mode (with no cookie) ? #7
// https://github.com/Rennes-en-Resilience/Cartes/issues/7

if ("theme" in params) {
    // console.log("'theme' is in params, params['theme'] =", params["theme"]);
    var theme = params["theme"];
    if ((theme == "dark") || (theme == "darkly") || (theme == "night")) {
        // console.log("The user has chosen to use night mode with '?theme='" + theme + " in the URL.");
        document.getElementById("themeChanger").innerHTML = "<link rel='stylesheet' type='text/css' href='../css/darkly.css'/>";
        document.getElementById("themeChanger").innerHTML = "<link rel='stylesheet' type='text/css' href='css/darkly.css'/>";
    };
};

/**
* Get the user coordinates
* @param  {Number} lat The latitude
* @param  {Number} long The longitude
* @param  {String} url The URL
* @return {Object}     The coordinates of the user
*/
var getCenter = function (lat, long, url) {
    // console.log("To start, the center of the map is considered to be [lat, long] =", [lat, long]);

    // console.log("I'll try to get latitude or longitude from the current URL, ", url);

    // #3 case : get from URL
    // console.log("    trying to get URL parameter for latitude...");
    if ("lat" in params) {
        // console.log("Using parameters from the web URL to get latitude...");
        lat = params["lat"];
    }
    // console.log("    trying to get URL parameter for longitude...");
    if ("long" in params) {
        // console.log("Using parameters from the web URL to get longitude...");
        long = params["long"];
    }

    var regexp = /.*@(-?\d\d?\.\d\d+)[,/](-?\d\d?\.\d\d+).*/;
    if (RegExp(regexp).test(url)) {
        // console.log("Apparently, the web URL was compliant with a regexp that extract latitude and longitude...");
        // #1 case : get from URL in form https://XXX/@48.112735,-1.658536,15.74
        // Also detect if URL is https://XXX/XXX/#1km@48.112735,-1.658536,15.74
        lat = url.replace(regexp, "$1");
        if ((lat == undefined) || (lat > 180) || (lat < -180)) {
            lat = params["lat"];
        };
        if ((long == undefined) || (long > 180) || (long < -180)) {
            long = params["long"]
        }
        long = url.replace(regexp, "$2");
        // console.log("Using the web URL to get latitude =", lat, " and longitude =", long, "...");
    } else {
        // #2 case : get from geolocation
        if ("geolocation" in navigator) {  /* la géolocalisation est disponible */
            /* la géolocalisation n'est pas disponible */
            // console.log("Using browser geolocation API to get latitude and longitude...");
            // console.log("navigator.geolocation.getCurrentPosition =", navigator.geolocation.getCurrentPosition);
            navigator.geolocation.getCurrentPosition(function (position) {
                // console.log("Using browser geolocation API to get latitude and longitude...");
                if (!("lat" in params)) {
                    lat = position.coords.latitude;
                    // console.log("    => latitude =" + lat);
                }
                if (!("long" in params)) {
                    long = position.coords.longititude;
                    // console.log("    => latitude =" + long);
                }
            });
        };
    };

    // console.log("Before the last check, the center of the map is considered to be [lat, long] =", [lat, long]);
    // https://besson.link/carte-confinement/carte.html?lat=45.04608&long=1.74527
    if ((lat > 180) || (lat < -180)) {
        lat = default_lat;
    }
    if ((long > 180) || (long < -180)) {
        long = default_long;
    }
    console.log("After a last check to the latitude and longitude, the center of the map is considered to be [lat, long] =", [lat, long]);

    var center = [lat, long];
    // console.log("Now, the center of the map is considered to be [lat, long] =", center);
    return center;
};

/**
* Add a circle to the map
* source: https://leafletjs.com/examples/quick-start/
* @param  {Array} center Coordinate of the center of the circle
* @param  {Float} radius Radius of the circle
* @param  {Float} fillOpacity Opacity of the color of the circle (has to be between 0.05 and 0.1 if many circles are overlapping)
* @param  {Tuple} color Color of the circle
* @return {Object}     The created circle
*/
var createCircle = function(nbh, center, radius, fillOpacity, color) {
    var circle = L.circle(center, {
        radius:      radius,
        color:       color,
        fillColor:   color,
        fillOpacity: fillOpacity,
    }).addTo(nbh);
    return circle;
};

var center = getCenter(48.11165, -1.65732, window.document.href);
var lat = center[0];
var long = center[1];
var list_of_functions_to_call_when_latlong_change = [];
