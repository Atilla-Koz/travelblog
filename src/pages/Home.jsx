import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ExploreSection from '../components/ExploreSection';
import JournalSection from '../components/JournalSection';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-4 sm:mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 max-w-2xl">
            {t('hero.subtitle')}
          </p>
          <button 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Explore Section */}
      <ExploreSection />

      {/* Journal Section */}
      <JournalSection />
    </MainLayout>
  );
};

export default Home; 