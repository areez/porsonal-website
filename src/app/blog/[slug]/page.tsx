import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MainLayout from '@/layouts/MainLayout';
import { getPostBySlug } from '@/lib/mdx';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { frontMatter } = post;
  const { title, date, description, tags } = frontMatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {title}
          </h1>
          <time className="text-sm text-gray-600 dark:text-gray-400">
            {formattedDate}
          </time>
          {description && (
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          {/* @ts-ignore */}
          <MDXRemote
            source={`/posts/${params.slug}.mdx`}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
          />
        </div>
      </article>
    </MainLayout>
  );
}

export async function generateStaticParams() {
  // This function is used by Next.js for static site generation
  // It will pre-render all blog posts at build time
  const posts = await import('@/lib/mdx').then((mod) => mod.getAllPosts());
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}