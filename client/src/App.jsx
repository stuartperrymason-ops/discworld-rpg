import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './pages/Game'
import Guilds from './pages/Guilds'
import Codex from './pages/Codex'
import Settings from './pages/Settings'
import SceneEditor from './pages/SceneEditor'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white p-4">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/guilds" element={<Guilds />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/editor" element={<SceneEditor />} />
        </Routes>
      </div>
    </Router>
  )
}