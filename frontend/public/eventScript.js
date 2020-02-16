var mymap = L.map('mapid').setView([-34.587, -60.947],13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);



mymap.on('click', onMapClick);



var popup = L.popup();

function onMapClick(e) {
    var newMarker = new L.marker(e.latlng).addTo(mymap);
    newMarker.bindPopup(e.latlng.toString()).openPopup()
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

}



mymap.on('click', onMapClick);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties.nombre) {
        // layer.bindPopup(feature.properties.nombre);
        layer.bindPopup('<b>' + "Entidad " + '</b>' + feature.properties.nombre + '<br>' + '<b>' + "DIRECCIÓN " + '</b>' + feature.properties.direccion + '<br>' + '<b>' + "TELÉFONO " + '</b>' + feature.properties.telefono);

    }
}

// document.getElementById("conv").addEventListener("click",  function () {
//     console.log(mymap);
//     // this.mymap.removeLayer()
//        function deleteLayer() {
//         // mymap.remove();
        
//         mymap._panes.markerPane.remove();
        

//         // this.mymap.removeLayer()


//     }
//     deleteLayer()
    
//     // mymap.clearLayers();
// })


// document.getElementById("co").addEventListener("click",  function () {
//     var mymap = L.map('mapid').setView([-34.587, -60.947],13);

//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//         maxZoom: 18,
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         id: 'mapbox.streets'
//     }).addTo(mymap);
    
    
    
//     mymap.on('click', onMapClick);

// })

const cc = document.getElementById("events")
console.log(cc.value)
const ot = cc.value
const sec = ot.slice(1,-1);
console.log(sec);

console.log('cc')

// function eventos() {
//     // const sendlista =  JSON.parse(cc.value);
//     const sendlista =  {"_id":"5e388d30db0f5399f5d4174e","description":"accidente en la ruta","features":[{"properties":{"desc":null,"image":null},"geometry":{"coordinates":[[[-60.94596862792968]],[[-34.58601893600178]]],"type":"Point"},"_id":"5e388d30db0f5399f5d4174f","type":"Feature"}],"__v":0};
//    // map.removeLayer(cc.value)
//    console.log(mymap)

// L.geoJson([sendlista], { onEachFeature: onEachFeature }).addTo(mymap);
// //  this.mymap = L.mymap([event.location.lat, event.location.lng]);

// }

// eventos()

// window.onload = eventos();

document.getElementById("fer").addEventListener("click",  function () {
    function na() {
        var evt = new Event('click');
        var button = document.getElementById('convert');
        // This is where the magic happens
        button.dispatchEvent(evt);
    }

    setTimeout (function name() {
    var ev = new Event('click');
var butto = document.getElementById('convert');
// This is where the magic happens
butto.dispatchEvent(ev);
}, 300)

setTimeout (function name2() {
var eva = new Event('click');
var butt = document.getElementById('convertirRiesgo');
// This is where the magic happens
butt.dispatchEvent(eva);
}, 300)


na()
name()
name2()
    
})

document.getElementById("convert").addEventListener("click",  function () {
   
    console.log(sec)
    console.log(ot)
    console.log(cc.value)

    // function deleteLayer() {
    //     mymap.clearLayers();

    // }

      function eventos() {
         const sendlista =  JSON.parse(cc.value);
        // map.removeLayer(cc.value)
        console.log(mymap)

     L.geoJson([sendlista], { onEachFeature: onEachFeature }).addTo(mymap);
    //  this.mymap = L.mymap([event.location.lat, event.location.lng]);

    }

    eventos()
    
    
    });



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
            L.Icon.Default.imagePath = ' '
            L.geoJson([sendEntity], { onEachFeature: onEachFeature }).addTo(mymap);
    
        }
        riesgos()
    
    });
    
    