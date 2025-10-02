import { useGame } from '../context/GameContext'

export default function Inventory() {
  const { inventory } = useGame()

  return (
    <div className="bg-gray-900 text-white p-4 rounded">
      <h2 className="text-xl font-bold mb-2">🎒 Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}