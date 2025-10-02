const router = require('express').Router()
const {
  getClues,
  linkClues
} = require('../controllers/clueController')

// GET all clues
router.get('/', getClues)

// POST to link two clues
router.post('/link', linkClues)

module.exports = router