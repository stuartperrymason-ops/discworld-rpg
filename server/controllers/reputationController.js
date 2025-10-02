const Reputation = require('../models/Reputation')

exports.getReputation = async (req, res) => {
  try {
    const rep = await Reputation.find({ playerId: req.params.playerId })
    res.json(rep)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reputation' })
  }
}

exports.updateReputation = async (req, res) => {
  try {
    const { playerId, guild, delta } = req.body
    let rep = await Reputation.findOne({ playerId, guild })
    if (!rep) {
      rep = new Reputation({ playerId, guild, score: delta })
    } else {
      rep.score += delta
    }
    await rep.save()
    res.json(rep)
  } catch (err) {
    res.status(500).json({ error: 'Failed to update reputation' })
  }
}