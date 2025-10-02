import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [playerId, setPlayerId] = useState('stuart123')
  const [sceneId, setSceneId] = useState('intro')
  const [autosave, setAutosave] = useState(true)
  const [reputation, setReputation] = useState({})
  const [quests, setQuests] = useState([])
  const [inventory, setInventory] = useState([])
  const [achievements, setAchievements] = useState([])
  const [clues, setClues] = useState([])

  return (
    <GameContext.Provider value={{
      playerId, setPlayerId,
      sceneId, setSceneId,
      autosave, setAutosave,
      reputation, setReputation,
      quests, setQuests,
      inventory, setInventory,
      achievements, setAchievements,
      clues, setClues
    }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)