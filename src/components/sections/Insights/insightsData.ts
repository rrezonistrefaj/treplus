export type InsightItem = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
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
    },
    {
      id: 2,
      title: "Faster Website Loads",
      excerpt: "5 proven steps to improve performance.",
      imageUrl: "/insight2.png",
      category: "Development",
      date: "Aug 4, 2025",
    },
    {
      id: 3,
      title: "Google’s Big Update",
      excerpt: "What the new algorithm means for SEO.",
      imageUrl: "/insight3.png",
      category: "Industry News",
      date: "Sep 2, 2025",
    },
    {
      id: 4,
      title: "Design Systems: From Chaos to Clarity",
      excerpt: "Build consistency and ship faster with a shared system.",
      imageUrl: "/insight3.png",
      category: "Design",
      date: "Sep 15, 2025",
    },
  ],
};


