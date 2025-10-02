const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  icon: String
})

module.exports = mongoose.model('Achievement', achievementSchema)