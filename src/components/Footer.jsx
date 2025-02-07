import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
      {/* Hero benzeri arka plan */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Night mountain landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Footer içeriği */}
      <div className="relative h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="flex flex-col space-y-8">
            {/* Ana footer içeriği */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-white/90 text-sm sm:text-base tracking-wider">
                {t('footer.copyright')}
              </div>
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-8">
                <Link 
                  to="/about" 
                  className="text-white/90 hover:text-white transition-colors text-sm sm:text-base tracking-wider"
                >
                  {t('footer.links.about')}
                </Link>
                <span className="hidden sm:block text-white/20">|</span>
                <Link 
                  to="/explore" 
                  className="text-white/90 hover:text-white transition-colors text-sm sm:text-base tracking-wider"
                >
                  {t('footer.links.explore')}
                </Link>
                <span className="hidden sm:block text-white/20">|</span>
                <Link 
                  to="/journal" 
                  className="text-white/90 hover:text-white transition-colors text-sm sm:text-base tracking-wider"
                >
                  {t('footer.links.journal')}
                </Link>
                <span className="hidden sm:block text-white/20">|</span>
                <button 
                  className="text-white/90 hover:text-white transition-colors text-sm sm:text-base tracking-wider"
                >
                  {t('footer.links.search')}
                </button>
              </div>
            </div>

            {/* Geliştirici bilgisi */}
            <div className="text-center">
              <p className="text-white/70 text-sm">
                Designed & Developed by{' '}
                <a 
                  href="https://atillakoz.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/90 hover:text-white transition-colors hover:underline"
                >
                  Atilla Köz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 