import React from "react";
import "../styles/Dance.css";
import DanceCard from "../components/DanceCard";
import danceCover from "../assets/dance-cover-ann.jpg";
import varnam from "../assets/varnam2_thumbnail_1.png";
import brahmam from "../assets/brahmamokate_thumbnail.jpg";
import pushpanjali from "../assets/Pushpanjali_2.jpg";
import shabdham from "../assets/Shabdham_1.png";
import pushpanjaliAadhi from "../assets/pushpanjaliRaagam.jpg";
import kumaraSambhavam from "../assets/kumaraSambhavamRaagam.jpg";
import thillanaHindholam from "../assets/thillanaRaagam.jpg";
import shriChakraRaaja from "../assets/shriChakraRaaja.jpg";
import kaavadiChindu from "../assets/kaavadiChindu.jpg";

const Dance = () => {
  const projects = [
    {
      image: varnam,
      title: "Varnam",
      desc: "Snippet from a 45-minute narrative dance of a maiden waiting for her long-gone lover.",
      youtube: "https://www.youtube.com/watch?v=8iPHOOw55nA",
    },
    {
      image: brahmam,
      title: "Brahmam Okate",
      desc: "A dance to remind us that everyone and everything was created equal.",
      youtube: "https://www.youtube.com/watch?v=YRfWTIQgSPU",
    },
    {
      image: pushpanjali,
      title: "Pushpanjali",
      desc: "A salutory dance to the Gods, the musicians the teachers and the audience.",
      youtube: "https://www.youtube.com/watch?v=XjJhiG36XTI",
    },
    {
      image: shabdham,
      title: "Venuganane Shabdham",
      desc: "An expressive dance of a maiden persuading her friend",
      youtube: "https://www.youtube.com/watch?v=3xHD7CxjsLQ",
    },
    {
      image: pushpanjaliAadhi,
      title: "Pushpanjali Gambheera Naattai",
      desc: "A salutory dance by offering flowers to the Gods, the musicians and the audience",
      youtube: "https://www.youtube.com/shorts/3QOZOLSasOo",
    },
    {
      image: kumaraSambhavam,
      title: "Kumara Sambhavam",
      desc: "Snippets from a bold dance of heavy footed movements",
      youtube: "https://www.youtube.com/shorts/3QOZOLSasOo",
    },
    {
      image: thillanaHindholam,
      title: "Thillana Hindholam",
      desc: "A vibrant and lively pure dance piece set to the Hindolam raga",
    },
    {
      image: shriChakraRaaja,
      title: "Shri Chakra Raaja",
      desc: "An invocatory dance praising the female goddesses",
    },
    {
      image: kaavadiChindu,
      title: "Kaavadi Chindu",
      desc: "A lively folk dance",
      youtube: "https://www.youtube.com/shorts/TOiED_28BHY",
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
            youtube={p.youtube}
          />
        ))}
      </div>
    </div>
  );
};

export default Dance;
