const router = require('express').Router()
const { savePlayer, loadPlayer } = require('../controllers/playerController')

router.post('/', savePlayer)
router.get('/:playerId', loadPlayer)

module.exports = router