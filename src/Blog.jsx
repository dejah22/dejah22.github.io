import React from 'react';

const posts = [
  {
    title: 'Thoughts on Rhythm and Code',
    date: '2025-08-10',
    excerpt: 'When I map dance beats to signal cycles, something magical happens…',
    link: '#',
  },
  {
    title: 'Challenges in Multimodal Learning',
    date: '2025-04-22',
    excerpt: 'Bridging vision, text, and audio is still a frontier.',
    link: '#',
  },
  // add more posts
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <h2>Blog</h2>
      {posts.map((p, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h3>{p.title}</h3>
          <small>{p.date}</small>
          <p>{p.excerpt}</p>
          {p.link && <a href={p.link}>Read more ↗</a>}
        </div>
      ))}
    </section>
  );
}
