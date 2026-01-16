# ElPro Scripts Hub

A modern, visually stunning website for showcasing Roblox scripts collection.

## Features

- 🎨 Premium dark theme with animated backgrounds
- 📱 Fully responsive design
- 🔒 Security headers configured for Vercel
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

## Monitoring & Analytics

- **Vercel Web Analytics**: Integrated for tracking visitor metrics
- **Vercel Speed Insights**: Enabled for performance monitoring
  - Tracks Core Web Vitals (LCP, FID/INP, CLS)
  - Real user monitoring (RUM)
  - View performance data at `https://vercel.com/dashboard`
  
For detailed setup instructions, see [SPEED_INSIGHTS_SETUP.md](docs/SPEED_INSIGHTS_SETUP.md)

## Security

- Content Security Policy headers
- XSS Protection
- Frame denial (clickjacking protection)
- Input sanitization in JavaScript
- No eval() or unsafe functions
