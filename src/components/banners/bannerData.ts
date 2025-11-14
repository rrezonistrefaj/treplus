export interface AnimatedContent {
    word: string;
    wordColor: string;
    overlayImageSrc: string;
    mainImageSrc: string;
  }
  
  export interface BannerData {
    staticTitlePart: string;
    description: string;
    primaryButton: {
      text: string;
      action: string;
    };
    secondaryButton: {
      text: string;
      action: string;
    };
    animatedContent: AnimatedContent[];
    overlays: {
      orangePlus: {
        icon: string;
        color: string;
      };
    };
    trustedBy: {
      name: string;
      iconSrc: string;
      alt: string;
    }[];
  }
  
  export const bannerData: BannerData = {
    staticTitlePart: "We're your plus for smarter",
    description:
      "Join us on this transformative journey as a new era of nearshore services emerges, where your business growth and success become our top priority.",
    primaryButton: {
      text: "Let's talk",
      action: "/get-started",
    },
    secondaryButton: {
      text: "Learn More",
      action: "/learn-more",
    },
    animatedContent: [
      {
        word: "Development",
        wordColor: "text-blue-600",
        overlayImageSrc:
          "/blueIcon.svg",
        mainImageSrc:
          "/bannerImageBlue.png",
      },
      {
        word: "Marketing",
        wordColor: "text-green-500",
        overlayImageSrc:
          "/greenIcon.svg",
        mainImageSrc:
          "/bannerImageGreen.png",
      },
      {
        word: "Design",
        wordColor: "text-purple-600",
        overlayImageSrc:
          "/purpleIcon.svg",
        mainImageSrc:
          "/bannerImagePurple.png",
      },
    ],
    overlays: {
      orangePlus: {
        icon: "plus",
        color: "bg-orange-500",
      },
    },
    trustedBy: [
      {
        name: "Layers",
        iconSrc: "/LayersIcon.svg",
        alt: "Layers logo",
      },
      {
        name: "Catalog",
        iconSrc: "/CatalogIcon.svg",
        alt: "Catalog logo",
      },
      {
        name: "Sisyphus",
        iconSrc: "/SisyphusIcon.svg",
        alt: "Sisyphus logo",
      },
      {
        name: "Hourglass",
        iconSrc: "/HourglassIcon.svg",
        alt: "Hourglass logo",
      },
    ],
  };