import MainLayout from '../layouts/MainLayout';
import { formatDate } from '../utils/date';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Journal = () => {
  const { t } = useLanguage();
  const posts = t('journal.posts');

  return (
    <MainLayout>
      {/* Language Toggle */}
      <LanguageToggle />
      
      <div>
        {/* Hero Section */}
        <div className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
            alt="Journal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif text-white mb-4">{t('journal.title')}</h1>
            <p className="text-xl text-white">{t('journal.subtitle')}</p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
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
                    {t('journal.allPosts')} →
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