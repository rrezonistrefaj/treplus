export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonialsData: {
  title: string;
  description: string;
  mobileCta: string;
  items: Testimonial[];
} = {
  title: "What our clients say",
  description:
    "We love feedback from our clients. Get to know what they are saying about us!",
  mobileCta: "See more",
  items: [
    {
      id: 1,
      quote:
        "They provided top-notch nearshore development that boosted our project speed and quality.",
      name: "Morgan Carric",
      role: "Code Crafter",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      quote:
        "A reliable partner for scalable software solutions at competitive rates.",
      name: "Alexa Huster",
      role: "CEO of Ta2k",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      quote:
        "Their team integrated seamlessly with ours, delivering on time and with precision.",
      name: "Irina Lester",
      role: "Client",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 4,
      quote:
        "Professional, proactive, and focused on outcomes — we loved working with them.",
      name: "Liam Ortega",
      role: "Product Lead",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
  ],
};


