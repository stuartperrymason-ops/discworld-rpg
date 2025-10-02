const router = require('express').Router()
const {
  getReputation,
  updateReputation
} = require('../controllers/reputationController')

// GET reputation for a player
router.get('/:playerId', getReputation)

// POST to update reputation
router.post('/', updateReputation)

module.exports = router