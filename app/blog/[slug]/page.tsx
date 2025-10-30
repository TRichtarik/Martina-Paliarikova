import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const postsEn = getAllPosts('en');
  const postsCs = getAllPosts('cs');
  const allPosts = [...postsEn, ...postsCs];

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const isEnglish = post.locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white section-padding">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="flex items-center text-gold-400 hover:text-gold-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {isEnglish ? 'Back to Blog' : 'Zpět na blog'}
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-gold-500 text-navy-900 text-sm font-semibold rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-navy-200">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString(isEnglish ? 'en-US' : 'cs-CZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg prose-navy max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-serif font-bold text-navy-900 mb-6 mt-8">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4 mt-8">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-serif font-semibold text-navy-800 mb-3 mt-6">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-navy-700 leading-relaxed mb-4 text-lg">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-navy-700 mb-4 ml-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-navy-700 mb-4 ml-4">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="ml-4 text-lg">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-navy-900">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gold-500 pl-4 italic text-navy-600 my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Share/Navigate Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-custom max-w-4xl">
          <div className="card text-center">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
              {isEnglish ? 'Explore More Articles' : 'Prozkoumejte další články'}
            </h3>
            <p className="text-navy-600 mb-6">
              {isEnglish
                ? 'Discover more insights on international law, human rights, and legal education'
                : 'Objevte další poznatky o mezinárodním právu, lidských právech a právním vzdělávání'
              }
            </p>
            <Link href="/blog" className="btn-primary">
              {isEnglish ? 'View All Posts' : 'Zobrazit všechny články'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
