const Codex = require('../models/Codex')

exports.getCodexEntries = async (req, res) => {
  try {
    const entries = await Codex.find()
    res.json(entries)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch codex entries' })
  }
}