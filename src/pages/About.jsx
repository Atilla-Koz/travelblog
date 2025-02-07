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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg">
              <h2 className="text-4xl font-serif mb-8">{t('about.intro.title')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('about.intro.description')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.intro.tech')}
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Software Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-4xl font-serif mb-8 text-center text-white">{t('about.travel.title')}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.travel.perspective')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.travel.nature')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.travel.discovery')}
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                alt="Philosophy and Nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose prose-lg">
              <h2 className="text-4xl font-serif mb-8">{t('about.interests.title')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('about.interests.philosophy')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.interests.activities')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Writing Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-4xl font-serif mb-8 text-center text-white">{t('about.blog.title')}</h2>
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