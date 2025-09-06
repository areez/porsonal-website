You are an expert Next.js and Tailwind developer.

Generate a production-ready starter project for my personal portfolio and blog website.

### Context:
- The project is already cloned to my local machine from this repo:
  https://github.com/areez/personal-website.git
- This site will be deployed on Vercel and served at my custom domain:
  https://areezafsar.com

### Requirements:

1. **Framework & Setup**
   - Use the latest stable **Next.js** with **TypeScript** enabled.
   - Install and configure **Tailwind CSS** with PostCSS and Autoprefixer.
   - Configure **MDX** support for blog posts (with syntax highlighting for code blocks).
   - Add **Framer Motion** for animations.
   - Include a dark/light mode toggle using Tailwind's `dark:` variants.
   - Add SEO essentials: reusable `<SEO />` component, meta tags, OpenGraph, sitemap, `robots.txt`.
   - Configure `next-sitemap` for automatic sitemap generation.

2. **Folder Structure**
   Create a clean, organized folder structure:
/components → Navbar, Footer, HeroSection, BlogCard, ExperienceTimeline, DarkModeToggle, SEO
/layouts → MainLayout.tsx for consistent page wrapper
/lib → Utility functions (e.g., getPosts.ts, experience data)
/pages → index.tsx, about.tsx, blog/index.tsx, blog/[slug].tsx, contact.tsx
/posts → Sample MDX blog posts with frontmatter (title, date, tags)
/public → Profile picture, favicon, OG images, static assets
/styles → globals.css, tailwind.css

markdown
Copy code
Include a `.gitignore`, `.prettierrc`, `.eslintrc.json`, `tsconfig.json`, `tailwind.config.js`, and `next.config.js`.

3. **Design & UI**
- Modern, clean, minimal design.
- Fully responsive and mobile-first.
- Sticky Navbar with links to Home, About, Blog, Contact.
- Footer with copyright, year, and social links.
- Hero section with my name ("Areez Afsar Khan"), tagline, and call-to-action button.
- Timeline UI component for showcasing my experience.
- Blog listing page with cards (title, date, excerpt, "Read More" button).
- MDX blog post layout with proper typography and code syntax highlighting.

4. **Features**
- Dark/Light mode toggle.
- SEO-friendly structure and meta tags.
- Sample blog post included.
- Sitemap and robots.txt auto-generated.
- Ready for deployment on Vercel (no custom server).

5. **Code Quality**
- Use TypeScript everywhere with strict mode enabled.
- Modular, reusable, and well-commented components.
- Clean code with Prettier and ESLint configured.

6. **Deployment Setup**
- Configure the project for Vercel deployment out-of-the-box.
- Ensure environment is ready for connecting to the custom domain `areezafsar.com`.
- Add a production-ready `vercel.json` if needed for rewrites/redirects.

7. **Documentation**
- Create a clear `README.md` (I will provide this file manually later).
- Provide developer instructions in comments where necessary (how to add a blog post, update experience timeline, etc.).
- a production-ready vercel.json template in the root folder. This file ensures smooth deployment, SEO friendliness, and domain setup for areezafsar.com.
- this prompt file for Trae is located in the root folder named trae-prompt.md

### Deliverables:
- A fully functional, production-ready Next.js + Tailwind + MDX scaffold.
- Sample content: one dummy blog post, one dummy project/experience item.
- Working dark mode toggle and responsive layout.
- Code that is clean, modular, and easy to extend.

✅ Why This Prompt Is Now Complete
✔ Includes your domain name (areezafsar.com) and GitHub repo context.
✔ Specifies project structure, UI components, SEO setup, dark mode, MDX blog.
✔ Requests configuration files for clean development experience.
✔ Mentions deployment readiness (Vercel + sitemap + robots.txt).
✔ Ensures sample data so you can start customizing right away.

---

## 🗂️ Progress Log

- **2025-09-06**: Project initialized, dependencies installed, folder structure created, initial config files and components added.
- **2025-09-06**: Added CHANGELOG.md and /docs with developer instructions.