import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <button
        onClick={toggleLanguage}
        className="group flex items-center space-x-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full transition-all duration-300"
      >
        <span className="text-sm font-medium">
          {language === 'tr' ? 'EN' : 'TR'}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors" />
      </button>
    </div>
  );
};

export default LanguageToggle; 