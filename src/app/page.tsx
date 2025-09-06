import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  
  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-2xl">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-500">Areez Afsar Khan</span>
                </h1>
                <p className="mb-6 text-xl text-gray-700 dark:text-gray-300">
                  Software Developer & Tech Enthusiast
                </p>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  I build modern web applications with a focus on user experience, performance, and accessibility.
                  Welcome to my personal website where I share my projects, thoughts, and experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/about" size="lg">
                    About Me
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-800 md:h-80 md:w-80">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Areez Afsar Khan"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Recent Blog Posts</h2>
              <p className="text-gray-600 dark:text-gray-400">Check out my latest articles and thoughts</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card key={post.slug} hoverable className="h-full">
                  <Card.Header>
                    <Card.Title>
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
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
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Read more →
                    </Link>
                  </Card.Footer>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button href="/blog" variant="outline">
                View All Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
