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
    imageUrl:
      "/team-member1.png",
    icons: [
      { src: "/deafultOrangeIcon.svg", width: 322, height: 318, className: "-right-22 -top-24" },
    ],
  },
  {
    id: "scott",
    name: "Scott Eriksen",
    role: "Head of Marketing",
    imageUrl:
      "/team-member1.png",
    icons: [
      { src: "/greenIcon.svg", width: 223, height: 159, className: "-right-5 -top-18" },
    ],
  },
  {
    id: "elena",
    name: "Elena Smith",
    role: "Head of Design",
    imageUrl:
      "/team-member1.png",
    icons: [
      { src: "/purpleIcon.svg", width: 337, height: 252, className: "right-0 -top-29" },
    ],
  },
  {
    id: "daniel",
    name: "Daniel Perez",
    role: "Lead Engineer",
    imageUrl:
      "/team-member1.png",
    icons: [
      { src: "/BlueIcon.svg", width: 267, height: 180, className: "-right-4 -top-20" },
    ],
  },
];


