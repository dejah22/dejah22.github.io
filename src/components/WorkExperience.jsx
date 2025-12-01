import React from "react";
import "../styles/ExperienceCard.css";
import ExperienceCard from "../components/ExperienceCard";
import { sub } from "framer-motion/client";

const jobexperiences = [
  {
    role: "Software Development Engineer",
    company:
      "Sagent Lending Technologies - Dara, Critical Payments & Escrow Management",
    period: "Jul 2024 — Present",
    bullets: [
      "Selected as part of the top 1% developers for their flagship cross-country team, Dara.",
      {
        text: "Building full-stack reliability-sensitive infrastructures as part of the Critical Payments and Escrow Management team.",
        sub: [
          "Implementing API services in Java Springboot and event-driven pipelines with Kafka, to handle high-throughput, automated payments.",
          "Developing user-friendly React UI features and integrating them with backend services",
        ],
      },
      "Collaborated with global banking clients to deliver and scale payment engines for high-volume portfolios.",
      "Scaled to support near real-time processing for a portfolio of 2M+ active loans, exceeding performance and reliability targets.",
      "Modernizing legacy pipelines by re-engineering COBOL mainframe workflows to event-driven Java microservices.",
      "Mentored and trained 3 new interns for 6 months.",
      "Actively contributed to hiring drives by serving on technical interview panels.",
      "Delivered monthly engineering seminars on emerging technologies and modern problem-solving approaches.",
    ],
    section: "Recognition",
    achievements: [
      "Best Technical Hire of 2024 (India) for performance in Q2-Q4, 2024.",
    ],
    tags: [
      "React",
      "Java",
      "API Programming",
      "Kafka",
      "GraphQL",
      "PostgreSQL",
      "Kubernetes",
      "TypeScript",
      "Docker",
      "Git",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Sagent Lending Technologies",
    period: "Jan 2024 — Jun 2024",
    bullets: [
      {
        text: "Developed multiple web-based full-stack features across 3 internal projects:",
        sub: [
          "Extensively worked on building user-friendly React UI features and integrating them with backend services.",
          "Created APIs using Springboot and TypeORM to handle business logic and data management.",
          "Worked on optimizing database queries and improving overall application performance.",
        ],
      },
      "Independently analyzed, proposed, and led a container-slimming and load-optimization strategy to reduce Kubernetes deployment bottlenecks by ~35% across platforms. This effort earned me ownership of the subsequent workflow, company-wide recognition as the top performer among 22 interns, and a full-time offer.",
      "Automated the GraphQL → TypeORM type-generation process, and accelerated release cycles by 25% (measured by the managerial unit).",
      "Served as a local outreach deputy, supporting community and organizational initiatives.",
    ],
    tags: ["C/C++", "React", "Java", "TypeScript", "Jest"],
  },
  {
    role: "Software Development Intern",
    company: "Rocketlane",
    period: "Jun 2023 — Aug 2023",
    bullets: [
      {
        text: "Contributed to the development of an LLM-based AI assistant to analyze post-meeting transcripts for improved sales.",
        sub: [
          "Built custom transcript-cleaning modules to turn raw call data into structured inputs.",
          "Integrated OpenAI APIs to deliver high-quality summaries, Q&A responses, analytical insights, and auto-generated action items.",
        ],
      },
      "Built multiple React UI features for their flagship product, Rocketlane.",
      "Developed a new log-analysis module for faster insights into system issues.",
      "Took initiative to refactor the internal dashboard - cutting code size by 40% and reducing page load time. This earned a mention in the monthly org review for improving developer productivity.",
    ],
    tags: [
      "React",
      "Python",
      "Docker",
      "JavaScript",
      "HTML/CSS",
      "OpenAI APIs",
    ],
  },
];
/* Undergraduate */
const clubs = [
  {
    role: "Editor-in-Chief, SSNCE's Technical Editorital Teams",
    company: "SSN College of Engineering",
    period: "Sept 2020 — May 2024",
    bullets: [
      {
        text: "TechVibe, INVENTE (2022-2024)- Annual Techfest Newsletter of Dept. of Computer Science & Engineering, SSNCE",
        sub: [
          "Promoted for outstanding contributions as Deputy Head (2022) to Head (2023-2024).",
          "Covered emerging CS research, industry trends, and student hackathons, reaching 3000+ students and faculty.",
          "Led a 20-member team.",
        ],
      },
      {
        text: "Vibrations (2020-2021) - Quarterly Newsletter of the Dept. of Sciences and Humanities, SSNCE",
        sub: [
          "Promoted for outstanding contributions as Secretary (2020) to Head (2021).",
          "Led design, article review & management of Vibrations, SSNCE's Humanities Deparment's newsletter.",
          "Led a 15-member team.",
        ],
      },
      {
        text: "Vibrations (2020-2021) - Quarterly Newsletter of the Dept. of Sciences and Humanities, SSNCE",
        sub: [
          "Promoted for outstanding contributions as Secretary (2020) to Head (2021).",
          "Led design, article review & management of Vibrations, SSNCE's Humanities Deparment's newsletter.",
          "Led a 15-member team.",
        ],
      },
    ],
    section: "Recognition",
    achievements: [
      "Promoted from Deputy Head (2022) to Head (2023) of Tech Editorial Committee.",
    ],
    tags: ["Leadership", "Content editing", "Team Management"],
  },
  {
    role: "ML Deputy Head (Coding Club)",
    company: "SSN College of Engineering",
    period: "May 2022 — May 2024",
    bullets: [
      "Co-conducted workshops on NLP, Computer Vision, and ML fundamentals.",
      "Mentored juniors in ML projects and Kaggle competitions.",
    ],
    tags: ["Machine Learning", "Python", "Leadership", "Workshops", "Events"],
  },
  {
    role: "Fine Arts Club - Co-Chair",
    company: "SSN College of Engineering",
    period: "May 2021 — Jun 2022",
    bullets: [
      "Co-organized campus-wide dance events and competitions.",
      "Coordinated annual cultural fest activities with a 20-member team",
      "Collaborated with other clubs for cultural-fests and community events.",
    ],
    tags: ["Event Management", "Cultural Activities", "Dance", "Leadership"],
  },
];
const Experience = () => {
  return (
    <div className="experience-page">
      <h2 className="exp-title">Industrial Experience</h2>

      <div className="timeline">
        {jobexperiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
      <br />
      <h2 className="exp-title">Undergraduate Positions</h2>

      <div className="timeline">
        {clubs.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
