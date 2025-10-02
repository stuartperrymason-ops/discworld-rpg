import { useGame } from '../context/GameContext'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Clue({ clue, onLink }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CLUE',
    item: { id: clue._id },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  }))

  const [, drop] = useDrop(() => ({
    accept: 'CLUE',
    drop: (item) => onLink(item.id, clue._id),
  }))

  return (
    <div ref={node => drag(drop(node))} className="bg-gray-800 p-2 rounded">
      <strong>{clue.title}</strong>
    </div>
  )
}

export default function ClueBoard() {
  const { clues } = useGame()

  const handleLink = (fromId, toId) => {
    console.log(`Linking clue ${fromId} to ${toId}`)
    // TODO: Call backend to update clue links
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 gap-4">
        {clues.map(clue => (
          <Clue key={clue._id} clue={clue} onLink={handleLink} />
        ))}
      </div>
    </DndProvider>
  )
}