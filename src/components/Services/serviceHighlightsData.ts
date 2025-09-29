export type ServiceHighlightPlacement = "left" | "right";

export interface ServiceHighlightVisual {
  imageSrc: string;
  imagePlacement: ServiceHighlightPlacement;
}

export const serviceHighlightsData: ServiceHighlightVisual[] = [
  { imageSrc: "/ServiceBannerGreen.png", imagePlacement: "right" },
  { imageSrc: "/bannerImagePurple.png", imagePlacement: "left" },
  { imageSrc: "/ServiceBannerBlue.png", imagePlacement: "right" },
];


