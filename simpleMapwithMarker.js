function simpleMapwithMarker(data)
{
alert("leafleMarker "+data.length);
var svg = d3.select("#simpleMapwithMarker").append("svg:svg");
var map = new L.Map('map');
//var map = L.map('map').setView([51.505, -0.09], 13);
var appleUrl = 'http://gsp2.apple.com/tile?api=1&style=slideshow&layers=default&lang=en_US&z={z}&x={x}&y={y}&v=9',
    appleAttribution = 'Map data &copy; 2012  Apple, Imagery &copy; 2012 Apple',
    apple = new L.TileLayer(appleUrl, {maxZoom: 18, attribution: appleAttribution});

map.setView(new L.LatLng(36.516, 33.2), 5).addLayer(apple);
var marker = [];
    
//########################################
//fuelle die Karte mit allen Sonnenuhren #
//die die Filterbedingung erfuellen      #
//########################################
  
for(i=0;i<filterdata.length;i++){
    marker[i] = new L.marker([data[i].siteslatitude, data[i].siteslongitude]).addTo(map);               
};
};
