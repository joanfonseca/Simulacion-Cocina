const { Schema, model } = require('mongoose')

const persona = new Schema({
  id: { type: Number },
  nombre: { type: String },
  description: { type: String },
  habilidades: { type: Array },
  created_at: { type: Date, default: Date.now() }
})

module.exports = model('Persona', persona)
