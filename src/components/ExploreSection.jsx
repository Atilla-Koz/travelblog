import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ExploreSection = () => {
  const { t } = useLanguage();
  const locations = t('explore.locations');

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8">{t('explore.title')}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t('explore.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-light mb-2">{location.title}</h3>
                  <p className="text-sm tracking-wider text-gray-300">{location.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="mr-2">{t('explore.seeMore')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection; 