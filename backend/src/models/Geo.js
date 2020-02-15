const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
  description: { $type: String },
  type: { $type: String },  
  // date: { type: Date, default: Date.now },
  date: { $type: String },  
  EntSegunRiesgo: [],

  // Array of subdocuments
  features: [{
    type: String,
    properties: {
      desc : Object,
      image : Object
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