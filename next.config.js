/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Configure MDX support
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            jsx: true,
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      ],
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Enable strict mode for better development
  reactStrictMode: true,
  // Customize the URL prefix for static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://areezafsar.com' : '',
};

module.exports = nextConfig;
