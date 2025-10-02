const mongoose = require('mongoose')

const codexSchema = new mongoose.Schema({
  id: String,
  name: String,
  role: String,
  bio: String,
  image: String
})

module.exports = mongoose.model('Codex', codexSchema)