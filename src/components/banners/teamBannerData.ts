export interface TeamBannerData {
  trustedBy: {
    name: string;
    iconSrc: string;
    alt: string;
  }[];
}

export const teamBannerData: TeamBannerData = {
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
