import { useEffect } from 'react'
import { Howl } from 'howler'
import { useGame } from '../context/GameContext'

export default function AmbientPlayer() {
  const { sceneId } = useGame()

  useEffect(() => {
    const ambientMap = {
      intro: '/audio/ambient/watchtower.mp3',
      thief_encounter: '/audio/ambient/shades.mp3',
      guild_meeting: '/audio/ambient/guildhall.mp3',
    }

    const sound = new Howl({
      src: [ambientMap[sceneId] || '/audio/ambient/default.mp3'],
      loop: true,
      volume: 0.3,
    })

    sound.play()
    return () => sound.stop()
  }, [sceneId])

  return null
}