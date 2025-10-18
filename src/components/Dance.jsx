import React from "react";

const danceVideos = [
  {
    title: "Brahmam Okate – Bharatanatyam performance",
    desc: "An interpretation of devotion and rhythm in movement.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Fusion Choreography",
    desc: "Combining classical forms with modern expression.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // more
];

export default function Dance() {
  return (
    <section className="section" id="dance">
      <img src="../assets/portfolio.jpg"></img>
      {danceVideos.map((v, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <div className="video-container">
            <iframe
              src={v.url}
              title={v.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <h3>{v.title}</h3>
          <p>{v.desc}</p>
        </div>
      ))}
    </section>
  );
}
