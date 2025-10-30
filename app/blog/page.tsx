import Link from 'next/link';
import { BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Martina Paliariková',
  description: 'Legal reflections and academic insights on international law, human rights, and European integration',
};

export default function Blog() {
  // Get all blog posts from markdown files
  const postsEn = getAllPosts('en');
  const postsCs = getAllPosts('cs');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <BookOpen className="w-12 h-12 mr-4 text-gold-400" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold">Blog</h1>
          </div>
          <p className="text-xl text-navy-200 max-w-3xl leading-relaxed">
            Legal reflections and academic insights
          </p>
        </div>
      </section>

      {/* English Posts Section */}
      {postsEn.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold mb-8 text-navy-900">English Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsEn.map((post) => (
                <article key={post.slug} className="card hover:shadow-2xl transition-all group">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-navy-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-navy-100 text-sm text-navy-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-4 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Czech Posts Section */}
      {postsCs.length > 0 && (
        <section className="section-padding bg-navy-50">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold mb-8 text-navy-900">České články</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsCs.map((post) => (
                <article key={post.slug} className="card hover:shadow-2xl transition-all group bg-white">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-navy-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-navy-100 text-sm text-navy-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('cs-CZ', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-4 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                  >
                    Číst více →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Posts Message */}
      {postsEn.length === 0 && postsCs.length === 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom text-center py-12">
            <BookOpen className="w-16 h-16 text-navy-300 mx-auto mb-4" />
            <p className="text-xl text-navy-600">No blog posts available yet.</p>
            <p className="text-navy-500 mt-2">Check back soon for new articles!</p>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="section-padding bg-white border-t border-navy-100">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-8 text-navy-900 text-center">
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'International Law',
              'Human Rights', 
              'European Law',
              'Legal Education',
              'Strategic Culture',
              'EU Integration',
            ].map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-navy-50 border-2 border-navy-200 rounded-lg text-navy-700 font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
