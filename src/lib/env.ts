/**
 * Validates environment variables at build time
 */
function validateEnv() {
  const requiredEnvVars = [
    "NEXT_PUBLIC_SITE_URL",
  ] as const;

  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missingVars.join(", ")}`
    );
  }
}

validateEnv();

export const env = {
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "ReelFace",
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_CONTACT_EMAIL:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@reelface.com",
  NEXT_PUBLIC_ENABLE_ANALYTICS:
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  NEXT_PUBLIC_TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL,
} as const;

export type Env = typeof env;
