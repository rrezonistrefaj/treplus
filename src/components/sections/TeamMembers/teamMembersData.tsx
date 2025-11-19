export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    accent?: string; // tailwind gradient or color utility for subtle accents
    icons?: {
      src: string;
      width: number;
      height: number;
      className: string; // absolute positioning utilities
    }[];
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "mike",
      name: "Mike Morgan",
      role: "Co‑Founder",
      imageUrl: "/team-member1.png",
      icons: [
        {
          src: "/deafultOrangeIcon.svg",
          width: 294,
          height: 291,
          className: "-right-18 -top-24",
        },
      ],
    },
    {
      id: "scott",
      name: "Scott Eriksen",
      role: "Head of Marketing",
      imageUrl: "/team-member2.png",
      icons: [
        {
          src: "/greenIcon.svg",
          width: 204,
          height: 145,
          className: "-right-5 -top-16",
        },
      ],
    },
    {
      id: "elena",
      name: "Elena Smith",
      role: "Head of Design",
      imageUrl: "/team-member3.png",
      icons: [
        {
          src: "/purpleIcon.svg",
          width: 308,
          height: 230,
          className: "left-2 -top-20 rotate-12",
        },
      ],
    },
    {
      id: "daniel",
      name: "Daniel Perez",
      role: "Lead Engineer",
      imageUrl: "/team-member4.png",
      icons: [
        {
          src: "/blueIcon.svg",
          width: 218,
          height: 194,
          className: "-right-6 -top-16",
        },
      ],
    },
    {
      id: "sarah",
      name: "Sarah Johnson",
      role: "Product Manager",
      imageUrl: "/team-member5.png",
      icons: [
        {
          src: "/purpleIcon.svg",
          width: 308,
          height: 230,
          className: "left-2 -top-20 rotate-12",
        },
      ],
    },
    {
      id: "alex",
      name: "Alex Chen",
      role: "Senior Developer",
      imageUrl: "/team-member6.png",
      icons: [
        {
          src: "/blueIcon.svg",
          width: 218,
          height: 194,
          className: "-right-6 -top-16",
        },
      ],
    },
    {
      id: "maria",
      name: "Maria Rodriguez",
      role: "UX Designer",
      imageUrl: "/team-member7.png",
      icons: [
        {
          src: "/purpleIcon.svg",
          width: 308,
          height: 230,
          className: "left-2 -top-20 rotate-12",
        },
      ],
    },
    {
      id: "james",
      name: "James Wilson",
      role: "DevOps Engineer",
      imageUrl: "/team-member8.png",
      icons: [
        {
          src: "/greenIcon.svg",
          width: 204,
          height: 145,
          className: "-right-5 -top-16",
        },
      ],
    },
    {
      id: "lisa",
      name: "Lisa Park",
      role: "Content Strategist",
      imageUrl: "/team-member9.png",
      icons: [
        {
          src: "/deafultOrangeIcon.svg",
          width: 294,
          height: 291,
          className: "-right-18 -top-24",
        },
      ],
    },
  ];