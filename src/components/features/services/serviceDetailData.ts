import { StaticImageData } from "next/image";

export interface ServiceDetailItem {
  slug: string;
  imageSrc: string | StaticImageData;
  accentColor: string;
  i18nKey: string; // e.g. ServiceHighlights.items.0
}

export const serviceDetailItems: ServiceDetailItem[] = [
  {
    slug: "digital-marketing",
    imageSrc: "/ServiceHighlightGreen.png",
    accentColor: "#01AC53",
    i18nKey: "ServiceHighlights.items.0",
  },
  {
    slug: "branding-and-design",
    imageSrc: "/ServiceHighlightPurple.png",
    accentColor: "#9747FF",
    i18nKey: "ServiceHighlights.items.1",
  },
  {
    slug: "development",
    imageSrc: "/ServiceHighlightBlue.png",
    accentColor: "#2785FF",
    i18nKey: "ServiceHighlights.items.2",
  },
];

export function getServiceBySlug(slug: string): ServiceDetailItem | undefined {
  return serviceDetailItems.find((s) => s.slug === slug);
}


