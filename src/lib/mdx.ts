import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    [key: string]: any;
  };
};

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

export function getAllPostSlugs() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      frontMatter: {
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || [],
        ...data,
      },
    };
  } catch (error) {
    console.error(`Error getting post by slug: ${slug}`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }
  
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      // Sort by date in descending order (newest first)
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
  
  return posts;
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => {
    const tags = post.frontMatter.tags || [];
    return tags.includes(tag);
  });
}