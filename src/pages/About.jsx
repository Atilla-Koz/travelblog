import { useLanguage } from '../context/LanguageContext';
import MainLayout from '../layouts/MainLayout';
import LanguageToggle from '../components/LanguageToggle';

const About = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-center">{t('about.intro.title')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.intro.description')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.intro.tech')}
            </p>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-center">{t('about.travel.title')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.travel.perspective')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.travel.nature')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.travel.discovery')}
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-center">{t('about.interests.title')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.interests.philosophy')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.interests.activities')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-4xl font-serif mb-8 text-center">{t('about.blog.title')}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.blog.description')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.blog.invitation')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-center italic">
              {t('about.blog.closing')}
            </p>
          </div>
        </div>
      </section>

    
    </MainLayout>
  );
};

export default About; 