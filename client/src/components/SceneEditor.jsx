import { useEffect, useState } from 'react'
import { getDialogue, saveDialogue } from '../api/api'

export default function SceneEditor() {
  const [sceneId, setSceneId] = useState('')
  const [dialogue, setDialogue] = useState([])

  useEffect(() => {
    if (sceneId) {
      getDialogue(sceneId).then(res => setDialogue(res.data))
    }
  }, [sceneId])

  const handleSave = () => {
    saveDialogue(sceneId, dialogue).then(() => alert('Scene saved!'))
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded">
      <h2 className="text-2xl mb-4">🛠️ Scene Editor</h2>
      <input
        type="text"
        value={sceneId}
        onChange={e => setSceneId(e.target.value)}
        placeholder="Enter scene ID"
        className="mb-4 p-2 rounded w-full"
      />
      {/* Add editable fields for speaker, text, options */}
      <button onClick={handleSave} className="bg-brass text-soot px-4 py-2 rounded">
        Save Scene
      </button>
    </div>
  )
}