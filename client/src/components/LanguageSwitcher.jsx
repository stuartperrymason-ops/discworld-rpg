import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex space-x-2 mb-4">
      {['en', 'de', 'fr', 'pl', 'es'].map(lng => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className="bg-gray-700 text-white px-2 py-1 rounded"
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}