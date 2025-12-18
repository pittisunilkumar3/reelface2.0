// Type definitions for ReelFace application

export interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

export interface InterviewFormat {
  text: string;
  icon?: string;
}

export interface CTAButton {
  text: string;
  variant?: "default" | "outline";
  href?: string;
  onClick?: () => void;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Environment variables with type safety
export interface EnvironmentVariables {
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_CONTACT_EMAIL?: string;
}

// Form validation types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  type: "interview" | "brand" | "general";
}

export type FormErrors<T> = Partial<Record<keyof T, string>>;

// Animation configuration
export interface AnimationConfig {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition?: Record<string, unknown>;
  viewport?: { once: boolean; amount?: number };
}
