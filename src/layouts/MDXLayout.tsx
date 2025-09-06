import { ReactNode } from 'react';
import MainLayout from './MainLayout';

interface MDXLayoutProps {
  children: ReactNode;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    [key: string]: any;
  };
}

export default function MDXLayout({ children, frontMatter }: MDXLayoutProps) {
  const { title, date, description, tags } = frontMatter;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-8">
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
              {tags.map((tag) => (
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
          {children}
        </div>
      </article>
    </MainLayout>
  );
}