// Add console.log to check to see if our code is working.
console.log("working");
console.log(API_KEY)

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([39.09, -94.57], 4);

// Add a circle marker
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillcolor: "#ffff99"
 }).addTo(map);

 //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);