const geoCtrl = {};

// const Geo = require('../models/Geo');




geoCtrl.getGeo = async (req, res) => {

   await db.collection('geos').find().toArray((err, result) => {
        // if (err) return console.log(err)
        // renders index.ejs
        res.json(result)
      })
    // const geo = await Geo.find();
    // const geo = await db.collection('geos').find();
    // res.json(geo);
}




geoCtrl.createGeo = async (req, res) => {

    const { all, description } = req.body;
    const allObject = JSON.parse(all)
    const typeNested = allObject.features
    const desc = description

    db.collection('geos').save(req.body, 
        
        
        
        (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
    
    
    // const newGeo = new Geo({
    //         'description': desc,
    //         'features': typeNested
    //     });
    // await newGeo.save();
    res.json('New GEO added');
};
                




module.exports = geoCtrl;