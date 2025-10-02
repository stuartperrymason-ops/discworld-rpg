const mongoose = require('mongoose')

const clueSchema = new mongoose.Schema({
  title: String,
  description: String,
  discoveredBy: String,
  linkedTo: [String]
})

module.exports = mongoose.model('Clue', clueSchema)