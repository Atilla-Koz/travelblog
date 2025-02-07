import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { formatDate } from '../utils/date';

const posts = [
  {
    id: 1,
    title: 'A Week in the Swiss Alps',
    excerpt: "Discovering the breathtaking beauty of Switzerland's mountain landscapes and experiencing local culture.",
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    date: '2024-02-15',
    author: 'John Doe',
    category: 'Adventure',
  },
  {
    id: 2,
    title: 'Island Hopping in Greece',
    excerpt: 'Exploring the stunning Cyclades islands and their unique charm, from Santorini to Mykonos.',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    date: '2024-02-10',
    author: 'Jane Smith',
    category: 'Travel Guide',
  },
  {
    id: 3,
    title: 'Amazon Rainforest Adventure',
    excerpt: "Journey through the world's largest rainforest and discovering its incredible biodiversity.",
    image: 'https://images.unsplash.com/photo-1516908205727-40afad9449a8',
    date: '2024-02-05',
    author: 'Mike Johnson',
    category: 'Nature',
  },
];

const Journal = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
            alt="Journal"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif text-white mb-4">Travel Journal</h1>
            <p className="text-xl text-white">Stories from our adventures</p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Journal; 