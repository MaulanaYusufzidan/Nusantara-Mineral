export const governanceHeading = "Strong governance builds lasting trust.";

export const governanceIntro =
  "Every decision — from where we operate to how we report — is held to a governance standard built for scrutiny, not just compliance.";

export type GovernancePillar = {
  number: string;
  title: string;
  description: string;
};

export const governancePillars: GovernancePillar[] = [
  {
    number: "01",
    title: "Leadership",
    description:
      "An experienced board and management team accountable to shareholders, regulators and the communities our operations touch.",
  },
  {
    number: "02",
    title: "Ethics & Compliance",
    description:
      "A group-wide code of conduct, whistleblower protections, and zero tolerance for corruption across every site and supplier.",
  },
  {
    number: "03",
    title: "Risk Management",
    description:
      "Enterprise risk frameworks that cover operational, environmental and financial exposure — reviewed at board level every quarter.",
  },
];
