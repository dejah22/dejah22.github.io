import React from "react";
import "../styles/Dance.css";
import DanceCard from "../components/DanceCard";
import danceCover from "../assets/dance-cover-ann.jpg";
const Dance = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Choreography 1",
      desc: "An experimental fusion of classical and modern forms.",
      github: "https://github.com/yourproject1",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Performance 2",
      desc: "Live performance integrating AI motion capture.",
      github: "https://github.com/yourproject2",
    },
    {
      image: danceCover,
      title: "Dance Cover",
      desc: "A creative short blending music, movement, and visual storytelling.",
      github: "https://github.com/yourproject3",
    },
  ];

  return (
    <div className="dance-page">
      <div className="hero-section">
        <img src={danceCover} alt="Dance Hero" className="hero-image" />
      </div>

      <div className="dance-projects-grid">
        {projects.map((p, i) => (
          <DanceCard
            key={i}
            img={p.image}
            title={p.title}
            desc={p.desc}
            github={p.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Dance;
