export interface WhatWeDoItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface WhatWeDoContent {
  heading: string;
  items: WhatWeDoItem[];
}

export const whatWeDoData: WhatWeDoContent = {
  heading: "What we do",
  items: [
    {
      title: "Marketing Services",
      description: "We create strategies for social media, SEO, and campaigns to grow your brand and reach more customers.",
      iconSrc: "/greenIcon.svg", // Using green icon for marketing services
    },
    {
      title: "Software Services", 
      description: "We build web, mobile, and cloud applications that are secure, scalable, and tailored to your business needs.",
      iconSrc: "/blueIcon.svg", // Using blue icon for software services
    },
    {
      title: "Creative Services",
      description: "We design branding, UI/UX, and visual content that capture your brand's identity, tell your story, and keep your audience engaged.",
      iconSrc: "/purpleIcon.svg", // Using purple icon for creative services
    },
  ],
};
