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
        layer.bindPopup(feature.properties.nombre);
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
