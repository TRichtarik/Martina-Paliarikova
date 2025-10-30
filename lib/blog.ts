import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  locale: 'en' | 'cs';
  readTime: string;
}

export function getAllPosts(locale: 'en' | 'cs'): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          content,
          author: data.author || 'Legal Professional',
          category: data.category || 'Legal Analysis',
          locale: data.locale || 'en',
          readTime: data.readTime || '5 min read',
        } as BlogPost;
      })
      .filter((post) => post.locale === locale)
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return allPosts;
  } catch (error) {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      author: data.author || 'Legal Professional',
      category: data.category || 'Legal Analysis',
      locale: data.locale || 'en',
      readTime: data.readTime || '5 min read',
    };
  } catch (error) {
    return null;
  }
}

