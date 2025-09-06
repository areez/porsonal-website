# 🌐 Areez Afsar Khan — Personal Website

This is the source code for [areezafsar.com](https://areezafsar.com), my personal website and blog.
It showcases my profile, experience, projects, and thoughts on technology, business, and innovation.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React + TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Content:** [MDX](https://mdxjs.com/) (Markdown + JSX) for blogs
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Version Control:** [GitHub](https://github.com/areez/personal-website)

---

## 📂 Project Structure

```
personal-website/
├── components/        # Reusable UI components (Navbar, Footer, BlogCard, etc.)
├── layouts/           # Layout components for consistent page structure
├── lib/               # Utilities and data fetching logic
├── pages/             # Next.js pages (Home, About, Blog, Contact)
├── posts/             # Blog posts in MDX format
├── public/            # Static assets (images, favicons, OG images)
├── styles/            # Global CSS and Tailwind styles
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

---

## 🛠️ Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/areez/personal-website.git
cd personal-website
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser to preview the site.

---

## 📦 Build & Deploy

### Local Production Build

```bash
npm run build
npm start
```

### Deploy on Vercel

1. Push your changes to the `main` branch.
2. Connect the repo to [Vercel](https://vercel.com).
3. Vercel will automatically build & deploy to [https://areezafsar.com](https://areezafsar.com).

---

## 📝 Blog Posts

Blog content is stored as `.mdx` files in `/posts`.
Each post contains frontmatter for title, description, date, and tags:

```mdx
---
title: "My First Blog Post"
description: "An intro to my thoughts on tech and business."
date: "2025-09-06"
tags: ["technology", "personal"]
---

Write your content here in Markdown (or use JSX for custom components).
```

---

## 🎨 Features

- ⚡ **Blazing fast** — powered by Next.js & static generation
- 🌓 **Dark/Light mode** — switch theme dynamically
- 📝 **MDX-powered blog** — write content in Markdown + React
- 📱 **Responsive design** — optimized for all screen sizes
- 🔍 **SEO optimized** — meta tags, OpenGraph, sitemap
- 🧩 **Reusable components** — clean, modular architecture

---

## 🤝 Contributing

This is my personal project, but suggestions and feedback are welcome!
Feel free to fork this repo, create a branch, and submit a pull request.

---

## 📫 Contact

👤 **Areez Afsar Khan**
🌍 [areezafsar.com](https://areezafsar.com)
📧 [areez.bd@gmail.com](mailto:connect@areezafsar.com)
💼 [LinkedIn](https://linkedin.com/in/areezafsar)
🐙 [GitHub](https://github.com/areez)

---

## 📜 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of changes and project history.

---

## 📜 License

This project is open-source and available under the [Apache 2.0](LICENSE).
