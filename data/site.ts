export const site = {
  name: "Nusantara Mineral",
  legalName: "Nusantara Mineral",
  tagline: "Building a better future",
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Governance", href: "#governance" },
  { label: "Investors", href: "#investors" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Operations", href: "#operations" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Governance", href: "#governance" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Reports", href: "#investors" },
      { label: "Financial Highlights", href: "#investors" },
      { label: "Share Information", href: "#investors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Careers", href: "#careers" },
      { label: "News", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];
