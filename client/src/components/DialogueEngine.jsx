import { useEffect, useState } from 'react'
import { useGame } from '../context/GameContext'
import { getDialogue, updateReputation, savePlayer } from '../api/api'
import { Howl } from 'howler'
import { motion } from 'framer-motion'

export default function DialogueEngine() {
  const { sceneId, setSceneId, playerId, autosave } = useGame()
  const [dialogue, setDialogue] = useState([])

  useEffect(() => {
    getDialogue(sceneId).then(res => setDialogue(res.data))
  }, [sceneId])

  const playVoice = (voiceFile) => {
    if (voiceFile) {
      const sound = new Howl({ src: [voiceFile] })
      sound.play()
    }
  }

  const handleOption = (opt) => {
    if (opt.voice) playVoice(opt.voice)
    if (opt.reputationEffect) {
      updateReputation({ playerId, ...opt.reputationEffect })
    }
    setSceneId(opt.nextSceneId)
    if (autosave) savePlayer({ playerId, sceneId: opt.nextSceneId })
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded max-w-xl mx-auto">
      {dialogue.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="font-bold">{line.speaker}</h3>
          <p>{line.text}</p>
          <div className="mt-2 space-y-2">
            {line.options.map((opt, j) => (
              <button
                key={j}
                onClick={() => handleOption(opt)}
                className="bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded block w-full"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}