export const sustainabilityHeading = "Sustainability is part of how we operate.";

export const sustainabilityIntro =
  "We measure success not only in output, but in the condition we leave land, water and communities in once an operation winds down.";

export type Pillar = {
  title: string;
  description: string;
  stat: { value: string; label: string };
};

export const pillars: Pillar[] = [
  {
    title: "Environment",
    description:
      "Land rehabilitation, water stewardship and emissions reduction are built into every site plan from day one, not added at the end.",
    stat: { value: "40%", label: "Lower emissions intensity since 2015" },
  },
  {
    title: "People",
    description:
      "Safety, fair wages and skills development for the workforce that makes our operations possible, on-site and in surrounding towns.",
    stat: { value: "12K+", label: "Livelihoods supported across sites" },
  },
  {
    title: "Community",
    description:
      "Long-term investment in local education, healthcare and infrastructure, shaped together with the communities we operate alongside.",
    stat: { value: "150+", label: "Community programs supported" },
  },
];
