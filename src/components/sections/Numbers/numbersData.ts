export interface NumberCardItem {
  headline: string;
  subline: string;
  bgClass: string;
  bgImage: string;
}

export interface NumbersContent {
  headingStrong: string;
  headingSubtle: string;
  cards: NumberCardItem[];
}

export const numbersData: NumbersContent = {
  headingStrong: "We let the numbers talk",
  headingSubtle:
    "Our results speak for themselves, built on experience, trust, and impactful delivery.",
  cards: [
    {
      headline: "120+",
      subline: "Tre+ stands for three founders and the pluss",
      bgClass: "from-[#B189FB] to-[#B189FB]",
      bgImage: "/Purple-vector.svg",
    },
    {
      headline: "#2",
      subline: "Tre+ stands for three founders and the pluss",
      bgClass: "from-[#FF5F1F] to-[#FF5F1F]",
      bgImage: "/Orange-vector.svg",
    },
    {
      headline: "50+",
      subline: "Worldwide projects",
      bgClass: "from-[#2785FF] to-[#2785FF]",
      bgImage: "/Blue-vector.svg",
    },
    {
      headline: "90%",
      subline: "Appreciations overall",
      bgClass: "from-[#B189FB] to-[#B189FB]",
      bgImage: "/Purple-vector.svg",
    },
    {
      headline: "5",
      subline: "Years of experience",
      bgClass: "from-[#01AC53] to-[#01AC53]",
      bgImage: "/Green-vector.svg",
    },
    {
      headline: "532",
      subline: "Completed Projects",
      bgClass: "from-[#FF5F1F] to-[#FF5F1F]",
      bgImage: "/Orange-vector.svg",
    },
    {
      headline: "77%",
      subline: "More Upsells",
      bgClass: "from-[#2785FF] to-[#2785FF]",
      bgImage: "/Blue-vector.svg",
    },
  ],
};


