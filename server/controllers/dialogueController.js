const Dialogue = require('../models/Dialogue')

exports.getDialogue = async (req, res) => {
  try {
    const scene = await Dialogue.find({ sceneId: req.params.sceneId })
    res.json(scene)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dialogue' })
  }
}

exports.saveDialogue = async (req, res) => {
  try {
    const { sceneId } = req.params
    const existing = await Dialogue.findOne({ sceneId })
    if (existing) {
      await Dialogue.updateOne({ sceneId }, req.body)
      res.json({ message: 'Dialogue updated' })
    } else {
      const newScene = new Dialogue(req.body)
      await newScene.save()
      res.json({ message: 'Dialogue created' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to save dialogue' })
  }
}