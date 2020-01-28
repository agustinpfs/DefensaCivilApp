const geoCtrl = {};

const Geo = require('../models/Geo');




geoCtrl.getGeo = async (req, res) => {
    const geo = await Geo.find();
    res.json(geo);
};




geoCtrl.createGeo = async (req, res) => {

    const { all } = req.body;
    const allObject = JSON.parse(all)
    const typeNested = allObject.features
    
    const newGeo = new Geo({
            'name': 'pepe',
            'features': typeNested
        });
    await newGeo.save();
    res.json('New GEO added');
};
                




module.exports = geoCtrl;