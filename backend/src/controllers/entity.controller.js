const entityCtrl = {};

const Entity = require('../models/Entity');




entityCtrl.getEntity = async (req, res) => {
  const entity = await Entity.find();
  res.json(entity);
};




entityCtrl.createEntity = async (req, res) => {

  const {   tipoEntidad, 
            nombre, 
            telefono, 
            email, 
            sector, 
            direccion, 
            riesgo,
            lat,
            lon, 
                 } = req.body;
            la = parseFloat(lat)
            lo = parseFloat(lon)
            // lo = JSON.parse(lon)
            coor = [la, lo]
            // const coorde = coor
  //  const coord = [lat, lon] 
// returns 3.14        
  console.log(tipoEntidad)
  const newEntity = new Entity({

    features: [{
      properties: {
        nombre: nombre,
        tipoEntidad: tipoEntidad,
          direccion: direccion,
          telefono: telefono,
          email: email,
          sector: sector,
          direccion: direccion,
          riesgo: riesgo
      },
      geometry: {
          coordinates: coor
      }
    }],
    // Single subdocument
  
  })


      //       tipoEntidad:tipoEntidad,
      //       nombre, 
      //       telefono, 
      //       email, 
      //       sector, 
      //       direccion, 
      //       riesgo, 
      //       coord 
      // });
  await newEntity.save();
  res.json('New Entity added');
};
    
    

                




module.exports = entityCtrl;