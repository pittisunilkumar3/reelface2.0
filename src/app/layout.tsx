import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ReelFace - Real Faces. Real Stories. Real Brands.",
    template: "%s | ReelFace",
  },
  description:
    "ReelFace is a digital media platform focused on founder interviews, startup stories, and authentic brand promotions that people actually trust.",
  keywords: [
    "founder interviews",
    "startup stories",
    "brand promotions",
    "digital media",
    "authentic content",
    "Telugu content",
  ],
  authors: [{ name: "ReelFace" }],
  creator: "ReelFace",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ReelFace",
    title: "ReelFace - Real Faces. Real Stories. Real Brands.",
    description:
      "Founder interviews, startup stories, and authentic brand promotions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelFace - Real Faces. Real Stories. Real Brands.",
    description:
      "Founder interviews, startup stories, and authentic brand promotions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#EF4444",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
