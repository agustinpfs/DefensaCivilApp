const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const geoSchema = new Schema({
  description: String,
  type: String,
  // Array of subdocuments
  features: 
          [{
              type: String,
              properties: {
                          desc = Object,
                          image = Object
                          },
              geometry: {
                          type: String,
                          coordinates: [Number]
              }
              
          }],
})







module.exports = mongoose.model('Geo', geoSchema);