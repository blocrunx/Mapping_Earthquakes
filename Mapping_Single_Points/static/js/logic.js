// Get data from cities.js
let cityData = cities;

// Add console.log to check to see if our code is working.
console.log("working");
console.log(API_KEY)

// Create the map object with a center and zoom level.
var map = L.map('mapid').setView([39.09, -94.57], 4);

  // Loop through the cities array and create one marker for each city.
  cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    color: '#ffbf00',
    fillColor: '#ff8300'})
    .bindPopup("<h2>" + city.city + ", " +  city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>" ).addTo(map);
 });

 //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);