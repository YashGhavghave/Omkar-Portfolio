# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Checklist

- [ ] Update portfolio data in `/lib/data.ts`
  - [ ] Name and contact information
  - [ ] Work portfolio items
  - [ ] Services
  - [ ] Statistics
  - [ ] Testimonials

- [ ] Replace placeholder images
  - [ ] Add images to `/public` folder
  - [ ] Update image paths in components

- [ ] Add contact form backend (optional)
  - [ ] Connect to email service (SendGrid, Nodemailer, etc.)
  - [ ] Handle form submissions

- [ ] Update social media links
  - [ ] Instagram URL
  - [ ] WhatsApp number
  - [ ] Email address

- [ ] Customize colors (optional)
  - [ ] Edit `tailwind.config.ts`
  - [ ] Update color values in `/app/globals.css`

## 📁 Key Files to Edit

1. **Portfolio Data**: `/lib/data.ts`
   - All portfolio content lives here
   - Easy to update without touching components

2. **Global Styles**: `/app/globals.css`
   - Custom CSS and Tailwind utilities
   - Color definitions

3. **Main Page**: `/app/page.tsx`
   - Component layout
   - Section ordering

## 🎨 Colors Reference

- Red (Primary): `#e63329`
- Black: `#000000`
- White: `#ffffff`
- Gray: `#888888`, `#aaaaaa`, `#555555`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Deploy the `.next` folder

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
npm run type-check
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## ✨ Tips

1. Use Tailwind classes for styling - no need to write custom CSS
2. All portfolio content is in `/lib/data.ts` - centralized management
3. Components are reusable and modular
4. Add new sections by creating components and importing them in `page.tsx`
5. Animations are handled via Tailwind and CSS - customize in `tailwind.config.ts`

Happy coding! 🎉
