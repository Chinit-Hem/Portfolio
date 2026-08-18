# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and dark mode support.

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   ├── theme-provider.tsx         # Dark mode provider
│   ├── providers.tsx              # Client providers
│   ├── projects/
│   │   ├── page.tsx               # Projects listing
│   │   └── [slug]/page.tsx        # Project details
│   ├── services/page.tsx          # Services page
│   ├── contact/page.tsx           # Contact page
│   └── not-found.tsx              # 404 page
├── components/
│   ├── Navigation.tsx             # Main navigation
│   ├── Footer.tsx                 # Footer
│   ├── ProjectCard.tsx            # Project card component
│   ├── ServiceCard.tsx            # Service card component
│   ├── ResumeButton.tsx           # Resume download button
│   └── CTAButton.tsx              # Call-to-action button
├── lib/
│   └── config.ts                  # Portfolio configuration (edit this!)
├── public/
│   ├── projects/                  # Project screenshots
│   │   ├── vms-dashboard.png
│   │   ├── sms-dashboard.png
│   │   ├── loan-dashboard.png
│   │   ├── lms-dashboard.png
│   │   └── system-hub.png
│   └── resume.pdf                 # Your resume
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── package.json
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your Portfolio
Edit `lib/config.ts` and update:
- Personal information (name, email, title, bio)
- Social media links
- About section
- Experience
- Skills
- Projects
- Services
- Resume information

### 3. Add Your Resume
1. Create your resume as a PDF file
2. Place it in the `public` folder
3. Name it `resume.pdf`
4. The resume button will automatically appear

### 4. Add Project Screenshots
1. Create screenshots of your projects
2. Place them in `public/projects/`
3. Name them exactly as in the config:
   - `vms-dashboard.png`
   - `sms-dashboard.png`
   - `loan-dashboard.png`
   - `lms-dashboard.png`
   - `system-hub.png`
4. If images are missing, professional placeholders will show

### 5. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Features

- ✅ **Dark Mode**: Automatic dark mode with theme switcher
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Fast**: Built on Next.js with optimized performance
- ✅ **SEO Ready**: Meta tags, structured data, sitemap-ready
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Professional UI**: Clean, modern design with Tailwind CSS
- ✅ **Image Placeholders**: Graceful fallbacks when images are missing
- ✅ **Resume Management**: Automatic resume button configuration
- ✅ **Contact Form**: Built-in contact form (ready for backend integration)

## 📝 Configuration Guide

### Personal Information
Edit `lib/config.ts` to update:
```typescript
personal: {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your@email.com",
  // ... other info
}
```

### Projects
Each project needs:
- `id`: Unique identifier
- `title`: Project name
- `description`: Brief description
- `image`: Path to screenshot (e.g., `/projects/vms-dashboard.png`)
- `tags`: Technology tags
- `link`: External link (optional)
- `github`: GitHub link (optional)
- `caseStudy`: Slug for detailed page

### Services
Each service needs:
- `id`: Unique identifier
- `title`: Service name
- `description`: What the service includes
- `price`: Starting price (e.g., "$5,000")
- `icon`: Icon name from lucide-react (e.g., "Code", "Smartphone")
- `features`: Array of feature bullets

### Case Studies
Add detailed case study information for each project:
```typescript
"project-slug": {
  title: "Project Title",
  challenge: "What was the challenge?",
  solution: "How did you solve it?",
  results: "What were the measurable results?",
  technologies: ["Tech1", "Tech2"],
  images: ["/projects/screenshot.png"]
}
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js and configure everything
4. Your site goes live!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## 🎯 Customization

### Change Colors
Edit `tailwind.config.ts` to update color scheme:
```typescript
colors: {
  primary: {
    600: "#yourcolor",
    // ...
  }
}
```

### Modify Fonts
Update `app/globals.css` for custom fonts

### Change Spacing
Adjust `tailwind.config.ts` spacing values

### Update Navigation
Edit the `navItems` array in `components/Navigation.tsx`

## 🔧 Environment Variables
Currently, no environment variables are required. If you add backend features (email API, analytics, etc.), create a `.env.local` file.

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Best Practices

1. **Keep config.ts updated**: All portfolio content is centralized here
2. **Use placeholders wisely**: Edit template text marked with `[brackets]`
3. **Image format**: Use PNG or JPG for best compatibility
4. **Resume naming**: Always use `resume.pdf` exactly
5. **Links**: Use full URLs for external links
6. **Testing**: Test on mobile before deploying

## 🐛 Troubleshooting

### Images not showing?
- Check file names match exactly (case-sensitive on Linux/Mac)
- Ensure files are in `/public/projects/`
- Check browser console for 404 errors

### Resume button not working?
- Verify `resume.pdf` exists in `/public/`
- Check file permissions
- Clear browser cache

### Dark mode not working?
- Clear localStorage
- Check if browser supports `prefers-color-scheme`

### TypeScript errors?
```bash
npm run type-check
```

## 📚 Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📄 License

This portfolio template is free to use and customize.

## 🤝 Support

For issues or questions, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs

---

**Ready to launch your portfolio?** Update `lib/config.ts` and run `npm run dev`! 🚀
