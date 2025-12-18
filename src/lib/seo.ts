/**
 * SEO and metadata utilities
 */

import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Generates comprehensive metadata for pages
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/og-image.png",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors = ["ReelFace"],
}: SEOProps): Metadata {
  const siteName = "ReelFace";
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    keywords,
    authors: authors.map((name) => ({ name })),
    creator: siteName,
    publisher: siteName,
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@reelface",
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generates JSON-LD structured data for better SEO
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReelFace",
    description:
      "Digital media platform focused on founder interviews, startup stories, and authentic brand promotions",
    url: "https://reelface.com",
    logo: "https://reelface.com/logo.png",
    sameAs: [
      "https://instagram.com/reelface",
      "https://youtube.com/@reelface",
      "https://twitter.com/reelface",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@reelface.com",
    },
  };
}

/**
 * Generates breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
