export interface ServicesBannerData {
  trustedByLabel: string;
  trustedBy: {
    name: string;
    iconSrc: string;
    alt: string;
  }[];
  images: string[];
  overlayTexts: {
    software: string;
    creative: string;
    marketing: string;
  };
}

export const servicesBannerData: ServicesBannerData = {
  trustedByLabel: "Trusted by:",
  images: [
    "/ServiceBannerOrange.png",
    "/ServiceBannerBlue.png",
    "/ServiceBannerPurple.png",
    "/ServiceBannerGreen.png",
  ],
  overlayTexts: {
    software: "overlays.software",
    creative: "overlays.creative",
    marketing: "overlays.marketing",
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
    {
      name: "Command+R",
      iconSrc: "/deafultOrangeIcon.svg",
      alt: "Command+R logo",
    },
    {
      name: "Catalog",
      iconSrc: "/CatalogIcon.svg",
      alt: "Catalog logo",
    },
  ],
};
