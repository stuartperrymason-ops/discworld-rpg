import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/translation.json'
import de from './de/translation.json'
import fr from './fr/translation.json'
import pl from './pl/translation.json'
import es from './es/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
    pl: { translation: pl },
    es: { translation: es },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n