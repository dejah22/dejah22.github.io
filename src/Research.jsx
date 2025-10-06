import React from 'react';

const researchList = [
  {
    title: 'Multi-Label Emotion Classification in Urdu',
    desc: 'Paper published at FIRE 2022. Exploring overlapping emotions in text.',
    link: '#',
  },
  {
    title: 'Video Captioning',
    desc: 'Generating captions for short-form video content in real time.',
    link: '#',
  },
  // add more
];

export default function Research() {
  return (
    <section className="section" id="research">
      <h2>Research</h2>
      {researchList.map((r, idx) => (
        <div key={idx} style={{ marginBottom: '2rem' }}>
          <h3>{r.title}</h3>
          <p>{r.desc}</p>
          {r.link && <a href={r.link}>Read more ↗</a>}
        </div>
      ))}
    </section>
  );
}
