# Miraal by Saima Shaikh - Next.js Website Guidelines

## Project Overview

This is a Next.js 14 portfolio website built with the App Router for Miraal by Saima Shaikh, a fashion textile brand.

## Brand Identity

- **Brand Name**: Miraal by Saima Shaikh
- **Founder**: Saima Anjum (Textile Entrepreneur | Fashion Market Strategist | Global Business Connector)
- **Founded**: 2020
- **Mission**: Bridging Indian textile artistry with global fashion trade

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (formerly Framer Motion)
- **Components**: Custom components with shadcn/ui
- **TypeScript**: Full TypeScript support
- **Performance**: Optimized with code splitting and lazy loading

## Design Aesthetics

- **Style**: Modern, aesthetic, minimal, premium, fashion-oriented
- **Background**: Light background with large white spaces
- **Typography**:
  - Serif: Playfair Display (headings)
  - Sans-serif: Inter (body text)

## Color Palette (Earthy Tones)

- **Primary**: Beige (#f5f1e8), Ivory (#faf8f4)
- **Accent**: Deep Indigo (#1e3a5f), Organic Green (#4a5d23), Muted Gold (#d4af37)
- **Supporting**: Warm Sand (#e6ddd0), Stone variations

## Website Sections (Single-Page Scroll)

1. **Hero Section** - Brand name, subtitle: "Connecting Global Textile Trade with Fashion Innovation"
2. **About Founder** - Saima Anjum's story and expertise
3. **About Brand** - Miraal's mission and story since 2020
4. **Ajrak Fabrics Showcase** - Traditional handmade fabric display
5. **Services** - 4 core services: Buyer Connections, Sample Services, Production Support, Collaborations
6. **Experience Timeline** - Professional journey and achievements
7. **Testimonials** - Client feedback and success stories
8. **Brand Values** - Integrity, Sustainability, Empowerment, Innovation through Tradition
9. **Contact** - Form, contact info, social links (Instagram, Website, LinkedIn)

## Next.js Specific Features

- **App Router**: Using the modern app directory structure
- **Server Components**: Optimized for performance where possible
- **Client Components**: Interactive components marked with 'use client'
- **Image Optimization**: Using Next.js Image component where applicable
- **Font Optimization**: Google Fonts optimized with next/font
- **SEO**: Proper metadata and structured data

## Key Features

- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Fade-in effects, scroll-based animations using Motion library
- **Performance Optimized**: Code splitting, lazy loading, and Next.js optimizations
- **Professional Contact**: Mumbai & Dubai locations
- **Social Presence**: Instagram, Website, LinkedIn integration

## Development Commands

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components (shadcn/ui)
│   └── [sections]/    # Page section components
├── lib/               # Utility functions
├── guidelines/        # Project documentation
└── public/            # Static assets
```

## Content Focus

- Sustainability and craftsmanship
- Traditional Ajrak printing techniques
- Global textile trade expertise
- Fashion innovation and authenticity
- Artisan empowerment

## Component Guidelines

- All components are in the `/components` directory
- UI components use shadcn/ui in `/components/ui`
- Custom utility functions in `/lib/utils.ts`
- Interactive components must include 'use client' directive
- Some base components may have default styling - explicitly override with Tailwind classes as needed

## Performance Optimizations

- Code splitting with React.lazy() and Suspense
- Font optimization with next/font
- Image optimization with next/image
- Minimal external dependencies
- CSS-in-JS avoided in favor of Tailwind CSS