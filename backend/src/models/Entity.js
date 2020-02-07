const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = new Schema({
  type: { $type: String, default: "FeatureCollection" },

  // Array of subdocuments
  features: [{
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
        type: { $type: String },
        coordinates: [[[Number]]]
    }
  }],
  // Single subdocument

}, { typeKey: '$type' })











module.exports = mongoose.model('Entity', entitySchema);