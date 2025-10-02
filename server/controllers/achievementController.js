const Player = require('../models/Player')
const Achievement = require('../models/Achievement')

exports.getAchievements = async (req, res) => {
  try {
    const player = await Player.findOne({ playerId: req.params.playerId })
    const allBadges = await Achievement.find()
    const unlocked = player?.achievements || []
    const result = allBadges.map(badge => ({
      ...badge._doc,
      unlocked: unlocked.includes(badge.id)
    }))
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch achievements' })
  }
}

exports.unlockAchievement = async (req, res) => {
  try {
    const { playerId, achievementId } = req.body
    const player = await Player.findOne({ playerId })
    if (!player.achievements.includes(achievementId)) {
      player.achievements.push(achievementId)
      await player.save()
    }
    res.json({ message: 'Achievement unlocked' })
  } catch (err) {
    res.status(500).json({ error: 'Failed to unlock achievement' })
  }
}