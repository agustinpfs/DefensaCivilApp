// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const geoSchema = new Schema({
  features: [{}]        
})







module.exports = mongoose.model('Geo', geoSchema);