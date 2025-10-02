const Clue = require('../models/Clue')

exports.getClues = async (req, res) => {
  try {
    const clues = await Clue.find()
    res.json(clues)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clues' })
  }
}

exports.linkClues = async (req, res) => {
  try {
    const { fromId, toId } = req.body
    const fromClue = await Clue.findById(fromId)
    if (!fromClue.linkedTo.includes(toId)) {
      fromClue.linkedTo.push(toId)
      await fromClue.save()
    }
    res.json({ message: 'Clues linked' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to link clues' })
  }
}