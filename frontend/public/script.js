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


map.on('click', onMapClick);



var popup = L.popup();

function onMapClick(e) {
    var newMarker = new L.marker(e.latlng).addTo(map);
    newMarker.bindPopup(e.latlng.toString()).openPopup()
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;




}

map.on('click', onMapClick);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties.nombre) {
        layer.bindPopup(feature.properties.nombre);
    }
}



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


const cc = document.getElementById("events")
console.log(cc.value)
const ot = cc.value
const sec = ot.slice(1,-1);
console.log(sec);

console.log('cc')
document.getElementById("conver").addEventListener("click", function () {
    function eventos() {
        const sendlista =  JSON.parse(ot);
        
        // console.log(sec)
        // L.geoJson([sendlista]).addTo(map);
        L.geoJson([sendlista], { onEachFeature: onEachFeature }).addTo(map);

    }
    eventos()
    
    });

