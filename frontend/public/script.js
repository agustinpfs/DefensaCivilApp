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
    // var newMarker = new L.marker(e.latlng).addTo(map);
    newMarker.bindPopup(e.latlng.toString()).openPopup()
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
}

map.on('click', onMapClick);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties.nombre) {
        layer.bindPopup("fadfdfasdfasf"+feature.properties.nombre + '<br>' + feature.properties.direccion);
    }
}

// muestra todas las entidades
// muestra todas las entidades
// muestra todas las entidades
// muestra todas las entidades

document.getElementById("convert").addEventListener("click", function () {
togeo = JSON.stringify(drawnItems.toGeoJSON(), null, 2);

console.log('hkhkhlhlkhkl'+togeo);
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
        // const sendlista =  {"features":[{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543956,-33.58608959822979]},"type":"Feature","_id":"5e40ae6f6e61f9dfb3f619dd","__v":0},{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e40ae986e61f9dfb3f619de","__v":0}]}
        // const sendlista =  {"features": [{"properties":{"riesgo":["incendioo"],"nombre":"san pablo","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e4091beeb9430dc2be140db","__v":0},{"properties":{"riesgo":["incendioo"],"nombre":"PIO X","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"035130441579999","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95858573913574,-34.5946746110185]},"type":"Feature","_id":"5e4091eaeb9430dc2be140dc","__v":0}]}
        
        // console.log(sec)
        // L.geoJson([sendlista]).addTo(map);
        L.geoJson([sendlista], { onEachFeature: onEachFeature }).addTo(map);

    }
    eventos()
    
    });

// Muestra una entidad
// Muestra una entidad
// Muestra una entidad

    // document.getElementById("ir").addEventListener("click",  function () {
    //     function na() {
    //         var evt = new Event('click');
    //         var button = document.getElementById('convertir');
    //         // This is where the magic happens
    //         button.dispatchEvent(evt);
    //     }
    
    //     setTimeout (function name() {
    //     var ev = new Event('click');
    // var butto = document.getElementById('convertir');
    // // This is where the magic happens
    // butto.dispatchEvent(ev);
    // }, 300)
    
    
    
    // na()
    // name()
        
    // })
    


// const ccc = document.getElementById("ente")
// console.log(ccc.value)
// const ott = ccc.value
// const secc = ott.slice(1,-1);
// console.log(secc);

// console.log(ccc + "tesss")
// document.getElementById("convertire").addEventListener("click", function () {
//     function entidades() {
//         // const sendEntity =  JSON.parse(ott);
//         const sendEntity =  {"features":[{"properties":{"riesgo":["incendio"],"nombre":"PIO X","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.945625305175774,-34.58481766903432]},"type":"Feature","_id":"5e40cff566a45de09dc6d753","__v":0}]}
//         // const sendEntity =  {"features":{"properties":{"riesgo":["incendioo"],"nombre":"PIO Xll","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513088888","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.940303802490234,-34.58340439154656]},"type":"Feature","_id":"5e40d04966a45de09dc6d754","__v":0}}
//         // const sendEntity =   {"features":[{"properties":{"riesgo":["incendioo"],"nombre":"PIO Xll","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513088888","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.940303802490234,-34.58340439154656]},"type":"Feature","_id":"5e40d04966a45de09dc6d754","__v":0}]}
//         // const sendlista =  {"features":[{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543956,-33.58608959822979]},"type":"Feature","_id":"5e40ae6f6e61f9dfb3f619dd","__v":0},{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e40ae986e61f9dfb3f619de","__v":0}]}
//         // const sendlista =  {"features": [{"properties":{"riesgo":["incendioo"],"nombre":"san pablo","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e4091beeb9430dc2be140db","__v":0},{"properties":{"riesgo":["incendioo"],"nombre":"PIO X","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"035130441579999","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95858573913574,-34.5946746110185]},"type":"Feature","_id":"5e4091eaeb9430dc2be140dc","__v":0}]}
        
//         // console.log(sec)
//         // L.geoJson([sendlista]).addTo(map);
//         L.geoJson([sendEntity], { onEachFeature: onEachFeature }).addTo(map);

//     }
//     entidades()
    
//     });

document.getElementById("convertire").addEventListener("click", function () {
    function entidades() {
        // const sendlista =  JSON.parse(ott);
        const sendEntity =  {"features":[{"properties":{"riesgo":["incendio"],"nombre":"PIO X","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.945625305175774,-34.58481766903432]},"type":"Feature","_id":"5e40cff566a45de09dc6d753","__v":0}]}
        // const sendlista =  {"features":[{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543956,-33.58608959822979]},"type":"Feature","_id":"5e40ae6f6e61f9dfb3f619dd","__v":0},{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e40ae986e61f9dfb3f619de","__v":0}]}
        // const sendlista =  {"features": [{"properties":{"riesgo":["incendioo"],"nombre":"san pablo","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e4091beeb9430dc2be140db","__v":0},{"properties":{"riesgo":["incendioo"],"nombre":"PIO X","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"035130441579999","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95858573913574,-34.5946746110185]},"type":"Feature","_id":"5e4091eaeb9430dc2be140dc","__v":0}]}
        
        // console.log(sec)
        // L.geoJson([sendlista]).addTo(map);
        L.geoJson([sendEntity], { onEachFeature: onEachFeature }).addTo(map);

    }
    entidades()
    
    });

