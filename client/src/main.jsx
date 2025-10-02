import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GameProvider } from './context/GameContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './locales/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <GameProvider>
        <App />
      </GameProvider>
    </I18nextProvider>
  </React.StrictMode>
)