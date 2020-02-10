const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const entitySchemaChildChild = new Schema({
//   properties: [entitySchemaChild]
// })
// const entitySchemaChild = new Schema({
//   tipoEntidad: { $type: String },
//   nombre: { $type: String },
//   direccion: { $type: String },
//   telefono: { $type: String },
//   email: { $type: String },
//   sector: { $type: String },
//   direccion: { $type: String },
//   riesgo: [String]
//   })

  const entitySchema = new Schema({
  // type: { $type: String, default: "FeatureCollection" },

  // Array of subdocuments
  // features: {
    type: { $type: String, default: "Feature" },
    properties: {
        tipoEntidad: { $type: String },
        nombre: { $type: String },
        direccion: { $type: String },
        telefono: { $type: String },
        email: { $type: String },
        sector: { $type: String },
        direccion: { $type: String },
        riesgo: [String]
    },
    geometry: {
        type: { $type: String, default: "Point" },
        // coordinates: [lat : { $type: String }, lon: { $type: String }],
        // coordinates: [Number],
        coordinates: [''],
    
  }},
  // Single subdocument

 { typeKey: '$type' })











module.exports = mongoose.model('Entity', entitySchema);