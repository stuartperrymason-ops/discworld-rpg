const mongoose = require('mongoose')

const dialogueSchema = new mongoose.Schema({
  sceneId: String,
  speaker: String,
  text: String,
  voice: String,
  options: [
    {
      text: String,
      nextSceneId: String,
      reputationEffect: { guild: String, delta: Number },
      voice: String
    }
  ]
})

module.exports = mongoose.model('Dialogue', dialogueSchema)