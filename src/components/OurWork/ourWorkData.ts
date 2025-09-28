export interface WorkItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    textColor: string;
  }

export interface OurWorkSectionData {
  title: string;
  description: string;
  seeMoreButtonText: string;
  seeMoreButtonHref: string;
  readMoreButtonText: string;
  readMoreButtonHref: string;
  workItems: WorkItem[];
}
  
export const ourWorkSectionData: OurWorkSectionData = {
  title: "Our work",
  description: "We create digital solutions that connect creativity with technology. From product design and web development to digital assets, our team delivers smart, scalable results that help businesses grow.",
  seeMoreButtonText: "See more",
  seeMoreButtonHref: "#",
  readMoreButtonText: "Read More",
  readMoreButtonHref: "#",
  workItems: [
    {
      id: "1",
      title: "Digital assets",
      description:
        "Marketing campaign promoting smart investment in digital assets. Marketing campaign promoting",
      imageUrl:
        "/ourwork1.png",
      category: "Digital Assets",
      textColor: "text-green-600",
    },
    {
      id: "2",
      title: "Product design",
      description:
        "Marketing campaign promoting smart investment in digital assets. Marketing campaign promoting",
      imageUrl:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center",
      category: "Product Design",
      textColor: "text-purple-600",
    },
    {
      id: "3",
      title: "Web development",
      description:
        "Marketing campaign promoting smart investment in digital assets. Marketing campaign promoting",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      category: "Web Development",
      textColor: "text-blue-600",
    },
    {
      id: "4",
      title: "Digital assets",
      description:
        "Marketing campaign promoting smart investment in digital assets. Marketing campaign promoting",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      category: "Digital Assets",
      textColor: "text-orange-600",
    },
  ]
};

// Keep the original export for backward compatibility
export const workItems = ourWorkSectionData.workItems;