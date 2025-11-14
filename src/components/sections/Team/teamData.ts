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
    mobileWidth: number;
    mobileHeight: number;
    className: string; // desktop absolute positioning utilities
    mobileClassName: string; // mobile absolute positioning utilities
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "mike",
    name: "Mike Morgan",
    role: "Co‑Founder",
    imageUrl:
      "/team-member1.png",
    icons: [
      { 
        src: "/deafultOrangeIcon.svg", 
        width: 322, 
        height: 318, 
        mobileWidth: 205, 
        mobileHeight: 203, 
        className: "-right-22 -top-24",
        mobileClassName: "-right-10 -top-20" // Add mobile-specific positioning here
      },
    ],
  },
  {
    id: "scott",
    name: "Scott Eriksen",
    role: "Head of Marketing",
    imageUrl:
      "/team-member2.png",
    icons: [
      { 
        src: "/greenIcon.svg", 
        width: 223, 
        height: 159, 
        mobileWidth: 142, 
        mobileHeight: 101, 
        className: "-right-5 -top-18",
        mobileClassName: "-right-5 -top-18" // Add mobile-specific positioning here
      },
    ],
  },
  {
    id: "elena",
    name: "Elena Smith",
    role: "Head of Design",
    imageUrl:
      "/team-member3.png",
    icons: [
      { 
        src: "/purpleIcon.svg", 
        width: 337, 
        height: 252, 
        mobileWidth: 214, 
        mobileHeight: 160, 
        className: "right-0 -top-29",
        mobileClassName: "right-0 -top-29" // Add mobile-specific positioning here
      },
    ],
  },
  {
    id: "daniel",
    name: "Daniel Perez",
    role: "Lead Engineer",
    imageUrl:
      "/team-member3.png",
    icons: [
      { 
        src: "/BlueIcon.svg", 
        width: 267, 
        height: 180, 
        mobileWidth: 170, 
        mobileHeight: 115, 
        className: "-right-4 -top-20",
        mobileClassName: "-right-4 -top-20" // Add mobile-specific positioning here
      },
    ],
  },
];


