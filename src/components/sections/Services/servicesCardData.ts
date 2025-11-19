// Services card data - only non-translatable styling configuration
// All text content is in locale files

export interface ServiceCardConfig {
  bgColor: string;
  textColor: string;
  isContact: boolean;
}

export const servicesCardData = {
  // Styling configuration for service cards
  serviceCard: {
    bgColor: "bg-white",
    textColor: "text-gray-900",
    isContact: false
  } as ServiceCardConfig,
  
  // Styling configuration for contact card
  contactCard: {
    bgColor: "bg-gray-50",
    textColor: "text-gray-900",
    isContact: true
  } as ServiceCardConfig
};

