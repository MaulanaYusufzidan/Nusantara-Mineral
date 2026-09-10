export type Operation = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const operationsIntro =
  "From the ground to the grid, our operations span three disciplines — each held to the same standard of safety, precision and long-term thinking.";

export const operations: Operation[] = [
  {
    slug: "mining",
    title: "Mining",
    description:
      "Responsible extraction guided by geological precision, rigorous safety standards, and a plan for the land long after operations end.",
    image: "/images/operations-mining.svg",
  },
  {
    slug: "processing",
    title: "Processing",
    description:
      "Modern processing facilities that convert raw material into refined output efficiently, with continuous monitoring of quality and emissions.",
    image: "/images/operations-processing.svg",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Ports, roads and power that connect our sites to markets — built to serve operations today and the communities around them for decades.",
    image: "/images/operations-infrastructure.svg",
  },
];
