const router = require('express').Router()
const {
  getAchievements,
  unlockAchievement
} = require('../controllers/achievementController')

// GET achievements for a player
router.get('/:playerId', getAchievements)

// POST to unlock achievement
router.post('/unlock', unlockAchievement)

module.exports = router