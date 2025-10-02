const mongoose = require('mongoose')

const reputationSchema = new mongoose.Schema({
  playerId: String,
  guild: String,
  score: Number
})

module.exports = mongoose.model('Reputation', reputationSchema)