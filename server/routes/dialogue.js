const router = require('express').Router()
const {
  getDialogue,
  saveDialogue
} = require('../controllers/dialogueController')

// GET dialogue by sceneId
router.get('/:sceneId', getDialogue)

// PUT to update or create dialogue
router.put('/:sceneId', saveDialogue)

module.exports = router