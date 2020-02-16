const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib
    });

map = L.map('map', {
    layers: [osm],
    center: [-34.58828009730246, -60.94828605651855],
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
    // newMarker.bindPopup(e.latlng.toString()).openPopup()
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
}

map.on('click', onMapClick);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties.nombre) {
        layer.bindPopup('<b>' + "COLEGIO " + '</b>' + feature.properties.nombre + '<br>' + '<b>' + "DIRECCIÓN " + '</b>' + feature.properties.direccion);
    }

   
        // var greenIcon = new L.Icon({
            // iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
           
        //   });

        //   var LeafIcon = L.Icon.extend({
        //     options: {
        //         shadowUrl: 'leaf-shadow.png',
        //         iconSize:     [38, 95],
        //         shadowSize:   [50, 64],
        //         iconAnchor:   [22, 94],
        //         shadowAnchor: [4, 62],
        //         popupAnchor:  [-3, -76]
        //     }
        // });
        
        //   L.marker([-34.57139056257011-60.93317985534667], {icon: greenIcon}).addTo(map);



        //   <img src="https://unpkg.com/leaflet@0.7.7/dist/images/marker-icon.png" 
        //   class="leaflet-marker-icon leaflet-zoom-animated leaflet-clickable" 
        //   tabindex="0" 
        //   style="margin-left: -12px; margin-top: -41px; width: 25px; height: 41px; transform: translate3d(472px, 143px, 0px); z-index: 143;"></img>
    
}

// muestra todas las entidades
// muestra todas las entidades
// muestra todas las entidades
// muestra todas las entidades

document.getElementById("convert").addEventListener("click", function () {
    togeo = JSON.stringify(drawnItems.toGeoJSON(), null, 2);

    console.log('hkhkhlhlkhkl' + togeo);
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


// Muestra una entidad
// Muestra una entidad
// Muestra una entidad

// document.getElementById("ir").addEventListener("click", function () {
//     function na() {
//         var evt = new Event('click');
//         var button = document.getElementById('convID');
//         // This is where the magic happens
//         button.dispatchEvent(evt);
//     }

//     setTimeout(function name() {
//         var ev = new Event('click');
//         var butto = document.getElementById('convID');
//         // This is where the magic happens
//         butto.dispatchEvent(ev);
//     }, 300)



//     na()
//     name()

// })





document.getElementById("ir").addEventListener("click",  function () {
    function na() {
        var evt = new Event('click');
        var button = document.getElementById('convertirRiesgo');
        // This is where the magic happens
        button.dispatchEvent(evt);
    }

    setTimeout (function name() {
        var evt = new Event('click');
        var button = document.getElementById('convertirRiesgo');
        // This is where the magic happens
        button.dispatchEvent(evt);
    },300)


na()
name()
    
})


document.getElementById("Xentidad").addEventListener("click", function () {
    function na() {
        var evt = new Event('click');
        var button = document.getElementById('convertire');
        // This is where the magic happens
        button.dispatchEvent(evt);
    }

    setTimeout(function name() {
        var ev = new Event('click');
        var butto = document.getElementById('convertire');
        // This is where the magic happens
        butto.dispatchEvent(ev);
    }, 300)



    na()
    // name()

})



document.getElementById("convertire").addEventListener("click", function () {
    const ccc = document.getElementById("ente")
    console.log(ccc.value)

    const ott = ccc.value
    const secc = ott.slice(1, -1);
    console.log(secc);
    function entidades() {
        const sendEntity = JSON.parse(ott);
        // const sendEntity =  {"features":[{"properties":{"riesgo":["incendio"],"nombre":"PIO X","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.945625305175774,-34.58481766903432]},"type":"Feature","_id":"5e40cff566a45de09dc6d753","__v":0}]}
        // const sendlista =  {"features":[{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543956,-33.58608959822979]},"type":"Feature","_id":"5e40ae6f6e61f9dfb3f619dd","__v":0},{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e40ae986e61f9dfb3f619de","__v":0}]}
        // const sendlista =  {"features": [{"properties":{"riesgo":["incendioo"],"nombre":"san pablo","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e4091beeb9430dc2be140db","__v":0},{"properties":{"riesgo":["incendioo"],"nombre":"PIO X","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"035130441579999","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95858573913574,-34.5946746110185]},"type":"Feature","_id":"5e4091eaeb9430dc2be140dc","__v":0}]}

        // console.log(sec)
        // L.geoJson([sendlista]).addTo(map);
        L.geoJson([sendEntity], { onEachFeature: onEachFeature }).addTo(map);

    }
    entidades()

});
document.getElementById("convertirRiesgo").addEventListener("click", function () {
    const bbb = document.getElementById("enterisc")
    console.log(bbb.value)
    // console.log(ccc.value)

    const off = ' {"features":' + bbb.value + '}'
    const seff = off.slice(1, -1);
    console.log(seff);
    function riesgos() {
        const sendEntity = JSON.parse(off);
        // const sendEntity = [{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 1","tipoEntidad":"Centro Salud","nro":"5909","direccion":"ALBERDI 2965","telefono":"0247742-1566","cp":"2700","email":"csantajuliaepb@yahoo.com.ar","sector":"Privada"},"geometry":{"type":"Point","coordinates":[-60.93317985534667,-34.57139056257011]},"type":"Feature","_id":"5e440516810592e2e79a9183"},{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 2","tipoEntidad":"Centro Salud","nro":"5802","direccion":"ITALIA 151","telefono":"0247742-4455","cp":"2700","email":"info@icade.edu.ar","sector":"Privada"},"geometry":{"type":"Point","coordinates":[-60.92845916748047,-34.58919867650491]},"type":"Feature","_id":"5e440516810592e2e79a9184"},{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 3","tipoEntidad":"Centro Salud","nro":"9000","direccion":"LAGOS 602","telefono":"0247741-4100","cp":"2700","email":"sanagustincolegio@hotmail.com","sector":"Privada"},"geometry":{"type":"Point","coordinates":[-60.95283508300781,-34.59414469764633]},"type":"Feature","_id":"5e440516810592e2e79a9185"},{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 4","tipoEntidad":"Centro Salud","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.96313476562499,-34.589551973494125]},"type":"Feature","_id":"5e440516810592e2e79a9186"},{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 5","tipoEntidad":"Centro Salud","nro":"1","direccion":"MERCED 618","telefono":"0247742-3742","cp":"2700","email":"eep1pergamino@yahoo.com.ar","sector":"Estatal"},"geometry":{"type":"Point","coordinates":[-60.96313476562499,-34.57782171051106]},"type":"Feature","_id":"5e440516810592e2e79a9187"},{"properties":{"riesgo":["accidente"],"nombre":"Centro Salud 6","tipoEntidad":"Centro Salud","nro":"48","direccion":"AV ANTONIO RIVERO S/N","telefono":"0247742-3704","cp":"2700","email":"claradisanto7@gmail.com","sector":"Estatal"},"geometry":{"type":"Point","coordinates":[-60.95163345336913,-34.58163776088898]},"type":"Feature","_id":"5e440516810592e2e79a9188"}]
        // const sendEntity =  {"features":[{"properties":{"riesgo":["incendio"],"nombre":"PIO X","tipoEntidad":"educación","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.945625305175774,-34.58481766903432]},"type":"Feature","_id":"5e40cff566a45de09dc6d753","__v":0}]}
        // const sendlista =  {"features":[{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543956,-33.58608959822979]},"type":"Feature","_id":"5e40ae6f6e61f9dfb3f619dd","__v":0},{"properties":{"riesgo":[],"nombre":"","tipoEntidad":"","direccion":"","telefono":"","email":"","sector":""},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e40ae986e61f9dfb3f619de","__v":0}]}
        // const sendlista =  {"features": [{"properties":{"riesgo":["incendioo"],"nombre":"san pablo","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"03513044157","email":"agustinpfs@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95189094543456,-34.58608959822379]},"type":"Feature","_id":"5e4091beeb9430dc2be140db","__v":0},{"properties":{"riesgo":["incendioo"],"nombre":"PIO X","tipoEntidad":"edu","direccion":"castro barros 100","telefono":"035130441579999","email":"agustin@gmail.com","sector":"público"},"geometry":{"type":"Point","coordinates":[-60.95858573913574,-34.5946746110185]},"type":"Feature","_id":"5e4091eaeb9430dc2be140dc","__v":0}]}

        // console.log(sec)
        // L.geoJson([sendlista]).addTo(map);
        L.geoJson([sendEntity], { onEachFeature: onEachFeature }).addTo(map);
        
     
        L.Icon.Default.imagePath = ' ';

    }
    riesgos()

});

