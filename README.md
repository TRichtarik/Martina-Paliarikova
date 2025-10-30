# Legal Professional Portfolio Website


A modern, elegant portfolio website for a legal professional specializing in international law and European integration. Built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

- **Multilingual Support**: Full Czech (CZ) and English (EN) translations with language switcher
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML structure
- **Blog System**: Markdown-based blog with search functionality
- **Professional Sections**:
  - Home with hero section and professional photo placeholder
  - About with education and interests
  - Experience with timeline of professional roles
  - Research & Focus Areas with detailed academic interests
  - Awards & Achievements showcase
  - Contact form with social media integration
- **Sticky CV Download Button**: Always accessible CV download
- **Google Analytics Ready**: Pre-configured for analytics tracking
- **Modern UI**: Navy blue, white, and gold color scheme with Inter and Lora fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd untitled
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── awards/            # Awards page
│   ├── blog/              # Blog listing and detail pages
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── research/          # Research page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── StickyCV.tsx       # Sticky CV download button
│   └── GoogleAnalytics.tsx # GA tracking
├── content/               # Content files
│   └── blog/             # Blog posts in Markdown
├── lib/                   # Utility functions
│   ├── i18n.ts           # Translation system
│   ├── locale-context.tsx # Language context provider
│   └── blog.ts           # Blog utilities
├── public/                # Static assets
│   └── cv.pdf            # CV file (add your own)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Professional Photo**: Replace the placeholder in `app/page.tsx` with your actual photo
2. **CV File**: Add your CV as `public/cv.pdf`
3. **Contact Info**: Update email and LinkedIn links in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
4. **Google Analytics**: Replace `G-XXXXXXXXXX` in `components/GoogleAnalytics.tsx` with your GA ID

### Add Blog Posts

Create new markdown files in `content/blog/`:

```markdown
---
title: "Your Article Title"
date: "2024-10-30"
excerpt: "Brief description of your article"
author: "Your Name"
category: "Legal Analysis"
locale: "en"
readTime: "5 min read"
---

# Your Article Title

Your content here...
```

### Color Scheme

Modify colors in `tailwind.config.ts`:
- Navy: Primary brand color
- Gold: Accent color
- Customize gradients and hover states throughout components

### Translations

Add or modify translations in `lib/i18n.ts`:
```typescript
export const translations = {
  en: { /* English translations */ },
  cs: { /* Czech translations */ }
};
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Custom Server

1. Build the production bundle:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

3. Use a process manager like PM2:
```bash
pm2 start npm --name "portfolio" -- start
```

## 🔧 Environment Variables (Optional)

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📧 Support

For issues or questions, please contact the maintainer or open an issue on GitHub.

## ✨ Features to Add (Future Enhancements)

- [ ] Newsletter subscription
- [ ] Dark mode toggle
- [ ] PDF viewer for CV
- [ ] Projects/publications section
- [ ] Testimonials section
- [ ] CMS integration (Contentful/Sanity)
- [ ] Advanced blog features (tags, categories, related posts)
- [ ] Internationalization for additional languages
- [ ] Accessibility improvements (WCAG 2.1 AA compliance)

---

Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS
