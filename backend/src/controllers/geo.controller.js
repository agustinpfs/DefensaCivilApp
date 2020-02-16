const geoCtrl = {};

const Geo = require('../models/Geo');




geoCtrl.getGeo = async (req, res) => {
  const geo = await Geo.find().sort({date:-1});
  res.json(geo);
};




geoCtrl.createGeo = async (req, res) => {

  const { all, title, description, date, EntSegunRiesgo } = req.body;
  const allObject = JSON.parse(all)
  const typeNested = allObject.features
  const desc = description
  
  const newGeo = new Geo({
    'EntSegunRiesgo': EntSegunRiesgo,
          'date': date,
          'title': title,
          'description': desc,
          'features': typeNested
      });
  await newGeo.save();
  res.json('New GEO added');
};
    
    

                




module.exports = geoCtrl;