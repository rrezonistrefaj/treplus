export type ServiceHighlightPlacement = "left" | "right";

export interface ServiceHighlightVisual {
  imageSrc: string;
  imagePlacement: ServiceHighlightPlacement;
  color: string;
}

export const serviceHighlightsData: ServiceHighlightVisual[] = [
  { imageSrc: "/ServiceHighlightGreen.png", imagePlacement: "right", color: "#01AC53" },
  { imageSrc: "/ServiceHighlightBlue.png", imagePlacement: "left", color: "#2785FF" },
  { imageSrc: "/ServiceHighlightPurple.png", imagePlacement: "right", color: "#9747FF" },
];


