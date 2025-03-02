import { useStore } from '../store/useStore';

export default function LanguageSelector() {
  const { languages, currentLanguage, setCurrentLanguage } = useStore();

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {languages.map((language) => (
        <button
          key={language.id}
          className={`flex flex-col items-center p-4 rounded-xl transition-all ${
            currentLanguage === language.id
              ? 'bg-green-100 border-2 border-green-500'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          onClick={() => setCurrentLanguage(language.id)}
        >
          <span className="text-4xl mb-2">{language.flag}</span>
          <span className="font-medium">{language.name}</span>
        </button>
      ))}
    </div>
  );
}
