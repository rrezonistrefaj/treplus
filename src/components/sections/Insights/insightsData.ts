export type InsightItem = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  slug: string;
};

export const insightsData: {
  title: string;
  description: string;
  seeMoreLabel: string;
  seeMoreButtonHref: string;
  items: InsightItem[];
} = {
  title: "Insights & News",
  description:
    "Stay up to date with the latest in software development, design, and marketing. From industry news to practical tips, our insights are here to help businesses grow smarter and stay ahead.",
  seeMoreLabel: "See more",
  seeMoreButtonHref: "/insights",
  items: [
    {
      id: 1,
      title: "Social Ads That Convert",
      excerpt: "How to design campaigns that boost ROI.",
      imageUrl: "/insight1.png",
      category: "Marketing",
      date: "Aug 2, 2025",
      slug: "social-ads-that-convert",
    },
    {
      id: 2,
      title: "Faster Website Loads",
      excerpt: "5 proven steps to improve performance.",
      imageUrl: "/insight2.png",
      category: "Development",
      date: "Aug 4, 2025",
      slug: "faster-website-loads",
    },
    {
      id: 3,
      title: "Google’s Big Update",
      excerpt: "What the new algorithm means for SEO.",
      imageUrl: "/insight3.png",
      category: "Industry News",
      date: "Sep 2, 2025",
      slug: "googles-big-update",
    },
    {
      id: 4,
      title: "Design Systems: From Chaos to Clarity",
      excerpt: "Build consistency and ship faster with a shared system.",
      imageUrl: "/insight3.png",
      category: "Design",
      date: "Sep 15, 2025",
      slug: "design-systems-clarity",
    },
    {
      id: 5,
      title: "Faster Website Loads 2",
      excerpt: "A pragmatic checklist for Core Web Vitals.",
      imageUrl: "/insight2.png",
      category: "Development",
      date: "Oct 12, 2025",
      slug: "core-web-vitals-checklist",
    },
    {
      id: 6,
      title: "Creative That Scales",
      excerpt: "How to build a content engine your team can maintain.",
      imageUrl: "/insight1.png",
      category: "Marketing",
      date: "Oct 25, 2025",
      slug: "creative-that-scales",
    },
    {
      id: 7,
      title: "From Idea to Launch",
      excerpt: "A simple roadmap for shipping product faster.",
      imageUrl: "/insight1.png",
      category: "Marketing",
      date: "Nov 3, 2025",
      slug: "from-idea-to-launch",
    },
    {
      id: 8,
      title: "Design Tokens in Practice",
      excerpt: "Keep brands consistent across platforms with tokens.",
      imageUrl: "/insight3.png",
      category: "Design",
      date: "Nov 12, 2025",
      slug: "design-tokens-in-practice",
    },
    {
      id: 9,
      title: "Edge Rendering Basics",
      excerpt: "When and why to run logic at the edge.",
      imageUrl: "/insight2.png",
      category: "Development",
      date: "Nov 20, 2025",
      slug: "edge-rendering-basics",
    },
  ],
};


