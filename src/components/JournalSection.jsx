import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const JournalSection = () => {
  const { t } = useLanguage();
  const posts = t('journal.posts');

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light mb-4">{t('journal.title')}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t('journal.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <Link to={`/journal/${index + 1}`} className="block">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-gray-400 text-sm tracking-wider">
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-light">{post.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/journal"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="mr-2">{t('journal.allPosts')}</span>
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

export default JournalSection; 