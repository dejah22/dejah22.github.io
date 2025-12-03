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
      "Contributed to scaling payment engines to support near real-time processing for a portfolio of 2M+ active loans.",
      "Modernizing legacy pipelines by re-engineering COBOL mainframe workflows to event-driven Java microservices.",
      "Mentored and trained 3 new interns for 6 months.",
      "Served on technical interview panels and actively contributed to hiring drives.",
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
      "Independently analyzed, proposed, and led a container-slimming and load-optimization strategy to reduce Kubernetes deployment bottlenecks by ~35% across platforms. This effort earned me ownership of the subsequent workflow, company-wide recognition as the top performer among 22 interns, and a full-time offer.",
      {
        text: "Developed multiple web-based full-stack features across 3 internal projects:",
        sub: [
          "Extensively worked on building user-friendly React UI features and integrating them with backend services.",
          "Created APIs using Springboot and TypeORM to handle business logic and data management.",
          "Worked on optimizing database queries and improving overall application performance.",
        ],
      },
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
          "Built custom transcript-cleaning modules to turn raw meeting transcripts into structured inputs.",
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
    period: "Sept 2021 — May 2024",
    bullets: [
      {
        text: "SSN-ACM Student Chapter (2023-2024) - Dept. of Computer Science & Engineering, SSNCE",
        sub: [
          "Led a 5-member team, covering departmental events, latest research and student achievements.",
          "Established a peer-review process that improved content quality and increased student contributions by 20%",
          "Wrote and reviewed blog content for the documentation and promotion of club's events.",
        ],
      },
      {
        text: "TechVibe, INVENTE (2023-2024)- Annual Techfest Newsletter of Dept. of Computer Science & Engineering, SSNCE",
        sub: [
          "Led a 20-member team and covered campus-wide tech events organized as part of INVENTE (SSNCE's National TechFest), 2023.",
          "Covered emerging CS research, industry trends, and student hackathons, reaching 3000+ students and faculty.",
        ],
      },
      {
        text: "Vibrations (2021-2022) - Quarterly Newsletter of the Dept. of Sciences and Humanities, SSNCE",
        sub: [
          "Led final-stage design, article review & management.",
          "Led a 15-member team, while coordinating with faculty advisors.",
        ],
      },
    ],
    tags: ["Leadership", "Content editing", "Team Management"],
  },
  {
    role: "Managing Editor, SSNCE's Technical Editorital Teams",
    company: "SSN College of Engineering",
    period: "Sept 2020 — May 2023",
    bullets: [
      {
        text: "TechVibe, INVENTE (2022-2023)- Annual Techfest Newsletter of Dept. of Computer Science & Engineering, SSNCE",
        sub: [
          "Promoted for outstanding contributions as Editorial Member (2021) to Managing Editor (2022-2023).",
          "Covered campus-wide tech events organized as part of INVENTE (SSNCE's National TechFest), 2022.",
          "Coordinated and co-supervised a 20-member team.",
        ],
      },
      {
        text: "Vibrations (2020-2021) - Quarterly Newsletter of the Dept. of Sciences and Humanities, SSNCE",
        sub: [
          "Led content review & management",
          "Carried out pre-final article edits, technical revisions, and layout.",
          "Coordinated and supervised a 15-member team.",
        ],
      },
    ],
    tags: ["Leadership", "Content editing", "Team Management"],
  },
  {
    role: "Member; Deputy Head, ML Coding Club",
    company: "SSN College of Engineering",
    period: "May 2022 — May 2024",
    bullets: [
      "Promoted from Technical Member (2022-2023) to Deputy Head (2024) of the Machine Learning division of the college coding club.",
      "Co-conducted workshops on NLP, Computer Vision, and ML fundamentals.",
      "Mentored juniors in ML projects and Kaggle competitions.",
      "Conducted discussions on recent ML research papers, advancements and trends.",
    ],
    tags: ["Machine Learning", "Python", "Leadership", "Workshops", "Events"],
  },
  {
    role: "Co-Chair, Fine Arts Club",
    company: "SSN College of Engineering",
    period: "May 2022 — Jun 2023",
    bullets: [
      "Co-organized campus-wide dance events and competitions.",
      "Conducted club meetings and auditions; increased outreach and voluntary teaching sessions to local communities.",
      "Coordinated a 20-member team.",
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
