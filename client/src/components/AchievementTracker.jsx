import { useGame } from '../context/GameContext'
import { motion } from 'framer-motion'

export default function AchievementTracker() {
  const { achievements } = useGame()

  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <h2 className="text-xl font-bold mb-2">🏅 Achievements</h2>
      <div className="grid grid-cols-3 gap-4">
        {achievements.map(a => (
          <motion.div
            key={a.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-center"
          >
            <img src={a.icon} alt={a.title} className="w-16 h-16 mx-auto" />
            <p className="text-sm mt-2">{a.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}