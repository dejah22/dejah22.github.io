import React from "react";
import "../styles/ExperienceCard.css";
import ExperienceCard from "../components/ExperienceCard";

const jobexperiences = [
  {
    role: "Software Development Engineer",
    company: "Sagent Lending Technologies - Critical Payments & Escrow",
    period: "Jul 2024 — Present",
    bullets: [
      // "Designing and developing production-facing applications for L1/L2 operations and SRE.",
      // "Real-time ROI platform and enterprise-grade SRE tooling.",
      // "Gamified approach to ensure apps are production-ready.",
      // "End-to-end ownership from system design to UI implementation.",
      // "Optimised backend APIs processing 10⁶+ entries/minute.",
      "Built full-stack payment infrastructures as part of Critical Payments and Escrow Management division.",
      "Scaled to support near real-time processing for a portfolio of 2M+ active loans.",
      "Re-engineering COBOL mainframe workflows to event-driven Java microservices.",
      "Trained 3 new interns for 6 months."
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
    period: "Jan 2024 — Jun 2024",
    bullets: [
      "Built Angular library for dynamic forms.",
      "Reduced code by 80% with reusable architecture.",
      "96% test coverage with Jest.",
      "Saved 75% dev time via automation.",
    ],
    tags: ["Angular", "Jest", "TypeScript"],
  },
  {
    role: "Software Development Intern",
    company: "Rocketlane",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      "Contributed to the development of an LLM-based AI assistant to analyze post-meeting transcripts for improved sales"
    ],
    tags: ["Springboot", "Docker", "Kubernetes"],
  },
];
/* Undergraduate */ 
const clubs = [
  {
    role: "Editor-in-Chief",
    company: "SSN College of Engineering",
    period: "Sept 2020 — May 2024",
    bullets: [
      "TechVibe, SSNCE's Annual TechFest Newsletter. (2023)",
      "Vibrations SSNCE. (2020-2021)",
      "Covered emerging CS research, industry trends, and student hackathons, reaching 3000+ students and faculty.",
      "Led a 15-member team.",
    ],
    section: "Recognition",
    achievements: [
      "Promoted from Deputy Head (2022) to Head (2023) of Tech Editorial Committee.",
    ],
    tags: ["Leadership", "Editing", "Team Management"],
  },
  {
    role: "ML Deputy Head (Coding Club)",
    company: "SSN College of Engineering",
    period: "May 2022 — May 2024",
    bullets: [
      "Organized workshops on ML topics like Natural language processing and Computer Vision.",
      "Conducted coding competitions and hackathons to foster practical skills among students.",
      "Mentored juniors in ML projects and research."
    ],
    tags: ["Machine Learning", "Python", "Leadership", "Workshops", "Events"],
  },
  {
    role: "Fine Arts Club - Co-Chair",
    company: "SSN College of Engineering",
    period: "May 2021 — Jun 2022",
    bullets: [
      "Led the Fine Arts Club, organizing events and workshops to promote artistic talents among students.",
      "Coordinated annual cultural fest activities, managing a team of 20 members.",
      "Facilitated collaborations with other college clubs for interdisciplinary events."
    ],
    tags: ["Event Management","Cultural Activities","Leadership"],
  },
  {
    role: "SSN-ACM Member",
    company: "SSN College of Engineering",
    period: "Sept 2022 — Sept 2023",
    bullets: [
      "Official student chapter under the CSE department promoting Computer Science since 2012.",
      "Organized expert talks, site visits, workshops, contests and discussion forums to develop practical skills.",
      "Provided professional networking opportunities with industry and academic experts.",
      "Supported student learning and career growth through curated resources and events."
    ],
    tags: ["ACM","Technical Events","Workshops","Networking"],
  }
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
