const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB connected'))

// API routes
app.use('/api/player', require('./routes/player'))
app.use('/api/dialogue', require('./routes/dialogue'))
app.use('/api/clue', require('./routes/clue'))
app.use('/api/reputation', require('./routes/reputation'))
app.use('/api/codex', require('./routes/codex'))
app.use('/api/achievement', require('./routes/achievement'))

// Serve frontend
app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.listen(5000, () => console.log('Server running on port 5000'))