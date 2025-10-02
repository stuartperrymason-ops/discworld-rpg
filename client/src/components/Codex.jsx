import { useEffect, useState } from 'react'
import { getCodex } from '../api/api'

export default function Codex() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    getCodex().then(res => setEntries(res.data))
  }, [])

  return (
    <div className="bg-parchment text-soot font-discworld p-6 rounded">
      <h2 className="text-2xl mb-4">📖 Codex</h2>
      <div className="grid grid-cols-2 gap-4">
        {entries.map(entry => (
          <div key={entry.id} className="border-brass border p-4 rounded">
            <img src={entry.image} alt={entry.name} className="w-24 h-24 mb-2" />
            <h3 className="text-xl font-bold">{entry.name}</h3>
            <p><strong>Role:</strong> {entry.role}</p>
            <p className="mt-2">{entry.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}