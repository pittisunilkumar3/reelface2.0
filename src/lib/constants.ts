/**
 * Constants used throughout the application
 */

export const SITE_CONFIG = {
  name: "ReelFace",
  tagline: "Real Faces. Real Stories. Real Brands.",
  description:
    "Reelface is a digital platform focused on creative brand promotions that people actually trust. ",
  url: "https://reelface.com",
  ogImage: "/og-image.png",
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const INTERVIEW_FORMATS = [
  "20–40 minute founder conversations",
  "Short reels for Instagram & YouTube Shorts",
  "Mobile-first, raw & relatable shooting style",
  "Telugu & English friendly content",
] as const;

export const SERVICE_TYPES = {
  interview: "Founder Interviews",
  brand: "Brand Promotions",
  trust: "Audience Trust",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/reelface",
  youtube: "https://youtube.com/@reelface",
  twitter: "https://twitter.com/reelface",
} as const;
