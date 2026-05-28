# Rustic Home

A premium luxury furniture and interior design website built with Next.js, Tailwind CSS, Framer Motion, and GSAP.

## Features

- Full-screen cinematic hero with parallax scrolling
- Editorial-style layouts with luxury aesthetics
- Smooth scroll animations (Framer Motion + GSAP ScrollTrigger)
- Glassmorphism UI elements and 3D hover interactions
- Responsive mobile-first design
- Auto-sliding testimonials carousel
- Before/after project showcase
- Contact form with embedded Google Map

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Fonts:** Inter + Poppins (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── FeaturedCollections.tsx
│   ├── InteriorShowcase.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── ProjectShowcase.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SmoothScroll.tsx
└── lib/
    └── animations.ts
```

## Color Palette

| Color    | Hex       | Usage              |
|----------|-----------|--------------------|
| Ink      | `#0a0a0a` | Primary dark       |
| Charcoal | `#1a1a1a` | Dark sections      |
| Wood     | `#6b4f3a` | Accent / brand     |
| Beige    | `#d4c4b0` | Highlights         |
| Cream    | `#f5f0e8` | Background         |
| Sand     | `#e8dfd3` | Secondary bg       |
| Stone    | `#9a9088` | Body text          |

## License

Private project — Rustic Home © 2026
