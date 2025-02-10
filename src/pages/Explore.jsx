import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const categories = ['All', 'Mountains', 'Islands', 'Nature', 'Cities'];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t } = useLanguage();
  const locations = t('explore.locations');

  const filteredLocations = selectedCategory === 'All'
    ? locations
    : locations.filter(loc => loc.category === selectedCategory);

  return (
    <MainLayout>
      {/* Language Toggle */}
      <LanguageToggle />
      
      <div>
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
            alt="Explore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 max-w-4xl">
                {t('explore.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {t('explore.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/5]"
              >
                <img
                  src={location.image}
                  alt={location.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="space-y-4">
                      <div className="text-white/70 text-sm tracking-wider">
                        {location.location}
                      </div>
                      <h3 className="text-2xl text-white font-light">
                        {location.title}
                      </h3>
                      <div className="h-1 w-12 bg-white/30 group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore; 