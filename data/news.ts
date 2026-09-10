export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  title: string;
  image: string;
};

export const newsHeading = "Latest News";

export const newsArticles: NewsArticle[] = [
  {
    slug: "emissions-target",
    category: "Sustainability",
    date: "Aug 12, 2026",
    title: "Nusantara Mineral Cuts Site Emissions by 40% Ahead of Target",
    image: "/images/sustainability-placeholder.svg",
  },
  {
    slug: "processing-facility",
    category: "Operations",
    date: "Jul 28, 2026",
    title: "New Processing Facility Reaches Full Operational Capacity",
    image: "/images/operations-processing.svg",
  },
  {
    slug: "vocational-training",
    category: "Community",
    date: "Jul 5, 2026",
    title: "Vocational Training Program Graduates Its First 200 Participants",
    image: "/images/careers-placeholder.svg",
  },
];
