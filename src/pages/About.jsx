import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-serif text-white">About Us</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              We are passionate travelers and storytellers, dedicated to sharing the beauty 
              and wonder of the world's most remarkable destinations. Our journey began 
              with a simple idea: to inspire others to explore, discover, and connect with 
              the diverse cultures and landscapes that make our planet extraordinary.
            </p>

            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              To inspire and empower travelers to explore the world responsibly, creating 
              meaningful connections and unforgettable experiences while preserving the 
              natural and cultural heritage of the places we visit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Destinations Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Countries Explored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About; 