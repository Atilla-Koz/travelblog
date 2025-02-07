import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

const destinations = [
  {
    id: 1,
    title: 'Swiss Alps',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    category: 'Mountains',
  },
  {
    id: 2,
    title: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    category: 'Islands',
  },
  {
    id: 3,
    title: 'Amazon Rainforest',
    location: 'Brazil',
    image: 'https://images.unsplash.com/photo-1516908205727-40afad9449a8',
    category: 'Nature',
  },
  // Daha fazla destinasyon eklenebilir
];

const categories = ['All', 'Mountains', 'Islands', 'Nature', 'Cities'];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDestinations = selectedCategory === 'All'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
            alt="Explore"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif text-white mb-4">Explore</h1>
            <p className="text-xl text-white">Discover amazing destinations</p>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map(destination => (
              <div
                key={destination.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white font-semibold mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-gray-200">{destination.location}</p>
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