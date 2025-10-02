const Player = require('../models/Player')

exports.savePlayer = async (req, res) => {
  const { playerId } = req.body
  let player = await Player.findOne({ playerId })
  if (!player) player = new Player(req.body)
  else Object.assign(player, req.body)
  await player.save()
  res.json(player)
}

exports.loadPlayer = async (req, res) => {
  const player = await Player.findOne({ playerId: req.params.playerId })
  res.json(player || {})
}