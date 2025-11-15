export const supportData = {
  title: "For other dedicated support",
  cards: [
    {
      id: "press-inquiry",
      icon: "/insightsIcon.png",
      heading: "Press Inquiry",
      description: "For any media or press-related questions, please contact us directly at:",
      actionText: "Info@treplus.com",
      actionType: "email" as const,
      actionUrl: "mailto:Info@treplus.com"
    },
    {
      id: "direct-meeting",
      icon: "/insightsIcon.png",
      heading: "Direct Meeting",
      description: "For priority discussions or project inquiries, schedule a meeting with our team:",
      actionText: "Schedule a meeting",
      actionType: "button" as const,
      actionUrl: "#"
    }
  ]
};
