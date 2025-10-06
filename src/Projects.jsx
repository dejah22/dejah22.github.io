import React from 'react';

const projectList = [
  {
    title: 'Attention Weight Visualizer',
    desc: 'An interactive tool to visualize attention heads across training epochs.',
    link: '#',
  },
  {
    title: 'Live Video Demo',
    desc: 'Pipeline to caption short video clips in real time.',
    link: '#',
  },
  // add more projects
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Fun Projects</h2>
      {projectList.map((p, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          {p.link && <a href={p.link}>View project ↗</a>}
        </div>
      ))}
    </section>
  );
}
