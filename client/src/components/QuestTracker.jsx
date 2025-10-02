import { useGame } from '../context/GameContext'

export default function QuestTracker() {
  const { quests } = useGame()

  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <h2 className="text-xl font-bold mb-2">📜 Active Quests</h2>
      <ul>
        {quests.map(q => (
          <li key={q.id}>
            <strong>{q.title}</strong>: {q.status}
          </li>
        ))}
      </ul>
    </div>
  )
}