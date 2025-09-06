import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import Card from '@/components/ui/Card';
import { getAllPosts } from '@/lib/mdx';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts, ideas, and insights on technology and development
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} hoverable className="h-full">
                <Card.Header>
                  <Card.Title>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {post.frontMatter.title}
                    </Link>
                  </Card.Title>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </Card.Header>
                <Card.Content>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.frontMatter.description}
                  </p>
                </Card.Content>
                <Card.Footer>
                  <div className="flex flex-wrap gap-2">
                    {post.frontMatter.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              No posts yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}