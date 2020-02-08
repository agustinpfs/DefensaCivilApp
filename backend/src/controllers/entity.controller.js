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
            coord     } = req.body;
            // coor = JSON.parse(coord)
            // const coorde = coor
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
          coordinates: coord
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