import { bannerData } from "@/components/banners/bannerData";

export interface ServiceItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface ServicesContent {
  heading: string;
  subheading: string;
  items: ServiceItem[];
  contactCard: {
    titleLines: string[];
    ctaText: string;
    iconSrc: string;
  };
}

// Map banner icons to service items by semantic meaning/color
const marketingIcon = bannerData.animatedContent.find(
  (c) => c.word.toLowerCase() === "marketing"
)?.overlayImageSrc as string;
const designIcon = bannerData.animatedContent.find(
  (c) => c.word.toLowerCase() === "design"
)?.overlayImageSrc as string;
const developmentIcon = bannerData.animatedContent.find(
  (c) => c.word.toLowerCase() === "development"
)?.overlayImageSrc as string;

// Reuse the orange plus visual used in the banner overlays section
const orangePlusIcon = "/deafultOrangeIcon.svg";

export const servicesData: ServicesContent = {
  heading: "Together we create.",
  subheading:
    "Expert app design, captivating web design, and advanced web development to elevate your digital presence and user experience.",
  items: [
    {
      title: "Marketing Services",
      description:
        "We create strategies for social media, SEO, and campaigns to grow your brand and reach more customers.",
      iconSrc: marketingIcon,
    },
    {
      title: "Creative Services",
      description:
        "We design branding, UI/UX, and visual content that capture your brand’s identity, tell your story, and keep your audience engaged.",
      iconSrc: designIcon,
    },
    {
      title: "Software Services",
      description:
        "We build web, mobile, and cloud applications that are secure, scalable, and tailored to your business needs.",
      iconSrc: developmentIcon,
    },
  ],
  contactCard: {
    titleLines: ["Let’s create", "your next big", "project", "together."],
    ctaText: "Get in touch",
    iconSrc: orangePlusIcon,
  },
};