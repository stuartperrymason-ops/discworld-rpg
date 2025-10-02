const router = require('express').Router()
const {
  getCodexEntries
} = require('../controllers/codexController')

// GET all codex entries
router.get('/', getCodexEntries)

module.exports = router