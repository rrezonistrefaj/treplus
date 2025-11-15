import { StaticImageData } from "next/image";

export type CaseCategory = "marketing" | "software" | "creative";

export interface CaseItem {
  id: string;
  slug: string;
  category: CaseCategory;
  coverImage: string | StaticImageData;
  accentColor: string;
  i18nKey: string; // e.g. 'cards.digital-assets-1'
}

// Note: Copy suitable images from public/ that already exist
// Slugs are stable so we can link from other sections reliably
export const casesData: CaseItem[] = [
  {
    id: "c1",
    slug: "digital-assets-1",
    category: "marketing",
    coverImage: "/ourwork1.png",
    accentColor: "#01AC53",
    i18nKey: "cards.digital-assets-1",
  },
  {
    id: "c2",
    slug: "unwell-product-design",
    category: "creative",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&crop=center",
    accentColor: "#9747FF",
    i18nKey: "cards.unwell-product-design",
  },
  {
    id: "c3",
    slug: "smart-web-app-landing",
    category: "software",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
    accentColor: "#2785FF",
    i18nKey: "cards.smart-web-app-landing",
  },
  {
    id: "c4",
    slug: "campaign-digital-assets-2",
    category: "marketing",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
    accentColor: "#FF5F1F",
    i18nKey: "cards.campaign-digital-assets-2",
  },
  // Additional mock items to reach 18
  {
    id: "c5",
    slug: "social-boost-campaign",
    category: "marketing",
    coverImage: "/insight1.png",
    accentColor: "#FF5F1F",
    i18nKey: "cards.social-boost-campaign",
  },
  {
    id: "c6",
    slug: "ecommerce-redesign",
    category: "software",
    coverImage: "/insight2.png",
    accentColor: "#2785FF",
    i18nKey: "cards.ecommerce-redesign",
  },
  {
    id: "c7",
    slug: "brand-refresh-kit",
    category: "creative",
    coverImage: "/insight3.png",
    accentColor: "#9747FF",
    i18nKey: "cards.brand-refresh-kit",
  },
  {
    id: "c8",
    slug: "product-teaser-video",
    category: "marketing",
    coverImage: "/ServiceHighlightGreen.png",
    accentColor: "#01AC53",
    i18nKey: "cards.product-teaser-video",
  },
  {
    id: "c9",
    slug: "mobile-app-ui-kit",
    category: "creative",
    coverImage: "/ServiceHighlightPurple.png",
    accentColor: "#9747FF",
    i18nKey: "cards.mobile-app-ui-kit",
  },
  {
    id: "c10",
    slug: "saas-dashboard",
    category: "software",
    coverImage: "/ServiceHighlightBlue.png",
    accentColor: "#2785FF",
    i18nKey: "cards.saas-dashboard",
  },
  {
    id: "c11",
    slug: "email-automation",
    category: "marketing",
    coverImage: "/ServiceBannerOrange.png",
    accentColor: "#FF5F1F",
    i18nKey: "cards.email-automation",
  },
  {
    id: "c12",
    slug: "landing-optimization",
    category: "software",
    coverImage: "/ServiceBannerGreen.png",
    accentColor: "#2785FF",
    i18nKey: "cards.landing-optimization",
  },
  {
    id: "c13",
    slug: "packaging-concepts",
    category: "creative",
    coverImage: "/ServiceBannerPurple.png",
    accentColor: "#9747FF",
    i18nKey: "cards.packaging-concepts",
  },
  {
    id: "c14",
    slug: "seo-foundations",
    category: "marketing",
    coverImage: "/bannerImageGreen.png",
    accentColor: "#01AC53",
    i18nKey: "cards.seo-foundations",
  },
  {
    id: "c15",
    slug: "nextjs-migration",
    category: "software",
    coverImage: "/bannerImageBlue.png",
    accentColor: "#2785FF",
    i18nKey: "cards.nextjs-migration",
  },
  {
    id: "c16",
    slug: "brand-guidelines",
    category: "creative",
    coverImage: "/bannerImagePurple.png",
    accentColor: "#9747FF",
    i18nKey: "cards.brand-guidelines",
  },
  {
    id: "c17",
    slug: "paid-media-optimizer",
    category: "marketing",
    coverImage: "/ourwork1.png",
    accentColor: "#FF5F1F",
    i18nKey: "cards.paid-media-optimizer",
  },
  {
    id: "c18",
    slug: "design-system-starter",
    category: "creative",
    coverImage: "/ourwork1.png",
    accentColor: "#9747FF",
    i18nKey: "cards.design-system-starter",
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return casesData.find((c) => c.slug === slug);
}

export const allowedCategories: CaseCategory[] = [
  "marketing",
  "software",
  "creative",
];


