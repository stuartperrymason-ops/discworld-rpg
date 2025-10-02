import { useGame } from '../context/GameContext'
import { updateReputation } from '../api/api'

const guilds = ['Thieves', 'Assassins', 'Beggars']

export default function GuildMissions() {
  const { playerId, reputation, setReputation } = useGame()

  const acceptMission = (guild) => {
    updateReputation({ playerId, guild, delta: 10 }).then(res => {
      setReputation(prev => ({ ...prev, [guild]: res.data.score }))
    })
  }

  return (
    <div className="p-6 bg-parchment text-soot font-discworld">
      <h2 className="text-2xl mb-4">Guild Interactions</h2>
      {guilds.map(guild => (
        <div key={guild} className="mb-4 border-brass border p-4 rounded">
          <h3 className="text-xl">{guild} Guild</h3>
          <p>Reputation: {reputation[guild] || 0}</p>
          <button
            onClick={() => acceptMission(guild)}
            className="mt-2 bg-brass text-soot px-4 py-2 rounded"
          >
            Accept Mission
          </button>
        </div>
      ))}
    </div>
  )
}