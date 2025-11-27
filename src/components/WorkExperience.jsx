import React from "react";
import "../styles/ExperienceCard.css";
import ExperienceCard from "../components/ExperienceCard";

const jobexperiences = [
  {
    role: "Software Development Engineer",
    company: "Sagent Lending Technologies - Critical Payments & Escrow",
    period: "July 2024 — Present",
    bullets: [
      "Designing and developing production-facing applications for L1/L2 operations and SRE.",
      "Real-time ROI platform and enterprise-grade SRE tooling.",
      "Gamified approach to ensure apps are production-ready.",
      "End-to-end ownership from system design to UI implementation.",
      "Optimised backend APIs processing 10⁶+ entries/minute.",
    ],
    section: "Recognition",
    achievements: [
      "Best Technical Hire of 2024 (India) for performance in Q3 2024.",
    ],
    tags: ["Angular", "React", "NestJS", "TypeScript", "Splunk"],
  },
  {
    role: "Software Development Intern",
    company: "Sagent Lending Technologies - Foreclosure Unit",
    period: "June 2023 — Aug 2023",
    bullets: [
      "Built Angular library for dynamic forms.",
      "Reduced code by 80% with reusable architecture.",
      "96% test coverage with Jest.",
      "Saved 75% dev time via automation.",
    ],
    tags: ["Angular", "Jest", "TypeScript"],
  },
  {
    role: "Application Development Intern",
    company: "Rocketlane",
    period: "Oct 2023 — July 2024",
    bullets: [
      "Led cloud initiatives and workshops.",
      "Mentored peers in cloud-native tools.",
    ],
    tags: ["GCP", "Docker", "Kubernetes"],
  },
];

const clubs = [
  {
    role: "Editor-in-Chief",
    company: "Sagent Lending Technologies - Critical Payments & Escrow",
    period: "July 2024 — Present",
    bullets: [
      "Designing and developing production-facing applications for L1/L2 operations and SRE.",
      "Real-time ROI platform and enterprise-grade SRE tooling.",
      "Gamified approach to ensure apps are production-ready.",
      "End-to-end ownership from system design to UI implementation.",
      "Optimised backend APIs processing 10⁶+ entries/minute.",
    ],
    section: "Recognition",
    achievements: [
      "Best Technical Hire of 2024 (India) for performance in Q3 2024.",
    ],
    tags: ["Angular", "React", "NestJS", "TypeScript", "Splunk"],
  },
  {
    role: "Software Development Intern",
    company: "Sagent Lending Technologies - Foreclosure Unit",
    period: "June 2023 — Aug 2023",
    bullets: [
      "Built Angular library for dynamic forms.",
      "Reduced code by 80% with reusable architecture.",
      "96% test coverage with Jest.",
      "Saved 75% dev time via automation.",
    ],
    tags: ["Angular", "Jest", "TypeScript"],
  },
  {
    role: "Application Development Intern",
    company: "Rocketlane",
    period: "Oct 2023 — July 2024",
    bullets: [
      "Led cloud initiatives and workshops.",
      "Mentored peers in cloud-native tools.",
    ],
    tags: ["GCP", "Docker", "Kubernetes"],
  },
];

const Experience = () => {
  return (
    <div className="experience-page">
      <h2 className="exp-title">Industrial Experience</h2>

      <div className="timeline">
        {jobexperiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            {...exp}
            showLine={i !== jobexperiences.length - 1 && i != 1}
            showDot={i !== jobexperiences.length - 1}
          />
        ))}
      </div>
      <br />
      <h2 className="exp-title">Undergraduate Positions</h2>

      <div className="timeline">
        {clubs.map((exp, i) => (
          <ExperienceCard
            key={i}
            {...exp}
            showLine={i !== clubs.length - 1 && i != 1}
            showDot={i !== clubs.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
