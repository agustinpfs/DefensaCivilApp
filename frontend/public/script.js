const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
osm = L.tileLayer(osmUrl, {
    maxZoom: 18,
    attribution: osmAttrib
});

map = L.map('map', {
layers: [osm],
center: [ -34.58828009730246, -60.94828605651855],
zoom: 15
});
const drawnItems = L.geoJson().addTo(map);
map.addControl(new L.Control.Draw({
edit: {
    featureGroup: drawnItems
}
}));

map.on('draw:created', function (event) {
const layer = event.layer,
    feature = layer.feature = layer.feature || {};

feature.type = feature.type || "Feature";
const props = feature.properties = feature.properties || {};
//layer.feature = {properties: {}}; // No need to convert to GeoJSON.
//const props = layer.feature.properties;
props.desc = null;
props.image = null;
drawnItems.addLayer(layer);
});


document.getElementById("convert").addEventListener("click", function () {
togeo = JSON.stringify(drawnItems.toGeoJSON(), null, 2);
console.log(togeo);
 function inputFunction() {
    // document.getElementById("demo").innerHTML = togeo;
    document.getElementById('demo').value = togeo;
    

    // console.log(this.type)
    //  this.setState({ type: this.type,
    //                     coordinates: this.coordinates
    //                   });
  }
  inputFunction()

});

