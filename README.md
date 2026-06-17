# Sports Gallery

![App Preview](https://imgix.cosmicjs.com/773a1b60-6a2f-11f1-8dfe-457508ece1b8-autopilot-photo-1507003211169-0a1dd7228f2d-1781688752140.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A next-generation, futuristic 3D sports equipment store experience. **Sports Gallery** combines the aesthetics of a high-end sports showroom, esports arena, and futuristic technology brand — featuring glassmorphism interfaces, neon orange and electric blue accents, animated statistics, holographic product pods, and immersive cinematic depth.

Built with **Next.js 16**, **Tailwind CSS**, and **Cosmic** as the headless CMS powering all products, categories, and customer reviews.

## Features

- 🚀 **Cinematic Hero Section** — Floating sports equipment, animated stadium-inspired atmosphere, rotating holographic sphere, and mouse-responsive parallax effects.
- 🛒 **Floating 3D Product Pods** — Glass capsules that open and reveal specifications on hover with neon glowing edges.
- 🏷️ **Category Zones** — Cricket, Football, Basketball, Badminton, Fitness & Sportswear zones with accent colors and emoji icons.
- 🌟 **Why Sports Gallery** — Futuristic hexagonal feature cards with glowing edges.
- 📈 **Live Statistics Wall** — Animated digital scoreboard with counting numbers.
- 💬 **Holographic Reviews** — Floating testimonial panels with animated glowing star ratings.
- 📍 **Digital Command Center Contact** — Neon-connected contact methods, store info & contact form.
- 📱 **Fully Responsive** — Glassmorphism design that scales from mobile to widescreen.

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a32694acb5ebdc34732fb2e&clone_repository=6a326a88cb5ebdc34732fb67)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews."

### Code Generation Prompt

> SPORTS GALLERY – Next-Generation 3D Sports Experience. Create a luxury futuristic 3D website for SPORTS GALLERY, designed to feel completely different from traditional sports stores. The website should combine the aesthetics of a high-end sports showroom, esports arena, and futuristic technology brand. Main Colors: Neon Orange, Electric Blue, Black, and White. Futuristic glassmorphism interface. Cinematic hero, virtual sports tunnel, floating 3D product pods, hexagonal feature cards, live statistics wall, immersive gallery, holographic customer reviews, and a futuristic digital command center contact section.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `categories`, `products`, and `reviews` object types

### Installation

```bash
bun install
```

Create environment variables (these are provided automatically when deployed via Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with connected categories
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single product by slug
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following Cosmic object types:

- **categories** — Sports zones (name, icon emoji, description, accent color, banner image)
- **products** — Equipment items (name, description, price, sale price, images, inventory status, brand, specifications, category, featured)
- **reviews** — Customer testimonials (reviewer name, rating, review text, product, avatar)

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Import the repo, set the Cosmic environment variables, and deploy.
- **Netlify** — Connect the repo and configure environment variables in the dashboard.

For production, set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform.
<!-- README_END -->