# ElPro Scripts Hub

A modern, visually stunning website for showcasing Roblox scripts collection.

## Features

- 🎨 Premium dark theme with animated backgrounds
- 📱 Fully responsive design
- 🔒 Security headers configured for Vercel
- 📊 Vercel Web Analytics enabled for visitor tracking
- 🖼️ Dynamic Roblox game thumbnails loading
- ✨ Smooth animations and transitions
- 🎮 3 featured scripts with detailed information

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Local Development

```bash
npx serve .
```

Then open http://localhost:3000

## Structure

```
MyWebScripts/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # JavaScript functionality
├── vercel.json     # Vercel configuration & security headers
├── package.json    # Project metadata
└── images/         # Script preview images
    ├── script1-preview.png
    ├── script2-preview.png
    └── script3-preview.png
```

## Adding New Scripts

1. Edit `script.js` and add a new entry to `scriptsData`
2. Add a new `<article class="script-card">` in `index.html`
3. Add preview image to `/images/`

## Security

- Content Security Policy headers
- XSS Protection
- Frame denial (clickjacking protection)
- Input sanitization in JavaScript
- No eval() or unsafe functions

## Analytics

This project includes Vercel Web Analytics to track visitor behavior and page performance metrics. Web Analytics is automatically enabled when deployed to Vercel.

### Analytics Configuration

- **What's tracked:** Page views, route changes, and Web Vitals (LCP, FID, CLS)
- **Privacy:** Vercel Web Analytics respects user privacy with no cookies by default
- **CSP Headers:** Content Security Policy has been updated to allow Vercel analytics scripts

To view your analytics:
1. Deploy your project to Vercel
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
3. Select your project
4. Click the **Analytics** tab
