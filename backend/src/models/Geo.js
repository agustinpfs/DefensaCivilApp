// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const geoSchema = new Schema({
  description: String,
  features: [{}]
})



// [{
//   "features": [
//     {
//       "type": "Feature",
//       "properties": { "desc": null, "image": null },
//       "geometry": { "type": "Point", "coordinates": [-60.94809293746948, -34.586230922487545] }
//     }],
//     "_id": "5e2f4b77cd2773512d422ed1", "__v": 0
// }]








module.exports = mongoose.model('Geo', geoSchema);