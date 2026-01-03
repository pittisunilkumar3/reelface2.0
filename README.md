# ReelFace

A modern digital media platform focused on founder interviews, startup stories, and authentic brand promotions.

## Features

- 🎯 **Robust Error Handling** - Error boundaries and graceful fallbacks
- 🔒 **Type Safety** - Full TypeScript support with strict typing
- ♿ **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation
- 🎨 **Modern UI** - Built with Tailwind CSS and Framer Motion
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Performance** - Optimized with Next.js 16 and React 19
- 🔍 **SEO Optimized** - Comprehensive meta tags and Open Graph support
- 🎭 **Loading States** - Skeleton screens and loading indicators
- 🛠️ **Developer Experience** - Custom hooks, utilities, and type definitions

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Custom component library

## Getting Started

### Prerequisites

- Node.js 20+ or newer
- npm, yarn, or pnpm

### Installation

1. Clone the repository and navigate to the directory
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your configuration.

### Development

Run the development server:

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Deploy

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
reelface/
├── public/              # Static files
│   └── images/         # Image assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout with SEO
│   │   ├── loading.tsx # Loading state
│   │   ├── not-found.tsx # 404 page
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── error-boundary.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   │   ├── constants.ts
│   │   ├── env.ts      # Environment validation
│   │   ├── helpers.ts
│   │   ├── utils.ts
│   │   └── validation.ts
│   └── types/          # TypeScript definitions
├── .env.example        # Environment template
└── ...config files
```

## Custom Hooks

- `useInView` - Intersection Observer hook
- `useScroll` - Scroll position tracking
- `useMediaQuery` - Responsive breakpoint detection
- `useDebounce` - Value debouncing
- `useAsync` - Async operation management
- `useLocalStorage` - Type-safe local storage
- `useToast` - Toast notification system

## Environment Variables

See `.env.example` for all available environment variables.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

All rights reserved © 2026 ReelFace
