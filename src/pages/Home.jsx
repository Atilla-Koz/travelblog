import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif mb-6">
            The Great Outdoors
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12">
            Wander often. Wonder always.
          </p>
          <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

      {/* Featured Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Destination Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://source.unsplash.com/random/800x600?mountain,landscape&sig=${item}`}
                  alt="Destination"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Amazing Destination {item}
                    </h3>
                    <p className="text-gray-200">
                      Discover the beauty of nature
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home; 