const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
  entityType: { $type: String },
  type: { $type: String },  

  // Array of subdocuments
  features: [{
    type: String,
    properties: {
        nombre: { $type: String },
        direccion: { $type: String },
        telefono: { $type: String },
        email: { $type: String },
        sector: { $type: String },
        direccion: { $type: String }
      },
    geometry: {
      type: { $type: String },
      coordinates: [[[Number]]]
    }
  }],
  // Single subdocument
 
},{typeKey: '$type'})






// const geoSchema = new Schema({
//   description: String,
//   type: String,
//   // Array of subdocuments
//   features: 
//           [{
//               type: String,
//               properties: {
//                           desc = Object,
//                           image = Object
//                           },
//               geometry: {
//                           type: String,
//                           coordinates: [Number]
//               }
              
//           }],
// })







module.exports = mongoose.model('Geo', geoSchema);