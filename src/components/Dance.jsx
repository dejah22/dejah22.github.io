import React from "react";
import "../styles/Dance.css";
import DanceCard from "../components/DanceCard";
import danceCover from "../assets/dance-cover-ann.jpg";
import varnam from "../assets/varnam2_thumbnail_1.png";
import brahmam from "../assets/brahmamokate_thumbnail.jpg";
import pushpanjali from "../assets/Pushpanjali_2.jpg";
import shabdham from "../assets/Shabdham_1.png";

const Dance = () => {
  const projects = [
    {
      image: varnam,
      title: "Varnam Vachaspathi",
      desc: "Varnam is a centerpiece of Indian classical dance that combines intricate rhythms, graceful movements and heartfelt expressions.",
      youtube: "https://www.youtube.com/watch?v=8iPHOOw55nA",
    },
    {
      image: brahmam,
      title: "Brahmam Okate",
      desc: "Presenting a Bharatanatyam rendition of \"Brahmam Okate\", a timeless Keerthana composed by Sri Annamacharya. This dance is to spread awareness about the oneness of all beings, reminding us that everyone and everything was created equal.",
      youtube: "https://www.youtube.com/watch?v=YRfWTIQgSPU",
    },
    {
      image: pushpanjali,
      title: "Pushpanjali Gambheera Naattai",
      desc: "Pushpanjali is the offering of flowers to Hindu gods and goddesses, as a means of honour and invocation of blessings. It is an invocatory dance conducted at the beginning of a Bharatanatyam performance, and is the salutation to Lord Nataraja, the Guru, the musicians, and the audience.",
      youtube: "https://www.youtube.com/watch?v=XjJhiG36XTI",
    },
    {
      image: shabdham,
      title: "Venuganane Shabdham",
      desc: "INSERT DESCRIPTION HERE",
      youtube: "https://www.youtube.com/watch?v=3xHD7CxjsLQ",
    }
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
            youtube={p.youtube}
          />
        ))}
      </div>
    </div>
  );
};

export default Dance;
