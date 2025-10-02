const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  playerId: String,
  sceneId: String,
  reputation: Object,
  quests: Array,
  inventory: Array,
  achievements: Array
})

module.exports = mongoose.model('Player', playerSchema)