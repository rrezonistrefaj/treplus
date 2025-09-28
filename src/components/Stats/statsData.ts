export interface StatItem {
    number: string;
    numberClass: string;
    title: string;
    description: string;
  }
  
  export interface StatsContent {
    headingStrong: string;
    headingSubtle: string;
    stats: StatItem[];
  }
  
  export const statsData: StatsContent = {
    headingStrong: "We specialize in building strong nearshore partnerships",
    headingSubtle:
      "that help businesses scale faster, optimize operations, and access top regional talent with ease.",
    stats: [
      {
        number: "100%",
        numberClass: "bg-orange-500",
        title: "Projects completed",
        description: "We've helped build over 400 amazing projects.",
      },
      {
        number: "200+",
        numberClass: "bg-purple-500",
        title: "5-star reviews",
        description: "We've helped build over 400 amazing projects.",
      },
      {
        number: "10k",
        numberClass: "bg-green-500",
        title: "Global downloads",
        description: "We've helped build over 400 amazing projects.",
      },
      {
        number: "600%",
        numberClass: "bg-blue-500",
        title: "Return on investment",
        description: "We've helped build over 400 amazing projects.",
      },
    ],
  };