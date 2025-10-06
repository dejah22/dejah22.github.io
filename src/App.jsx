import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { key: 'home', label: 'Home' },
  { key: 'research', label: 'Research' },
  { key: 'projects', label: 'Fun Projects' },
  { key: 'dance', label: 'Dance' },
  { key: 'blog', label: 'Blog' },
];

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export default function App() {
  const [tab, setTab] = useState('home');

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        tab === id ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-gray-200 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="p-6 flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">Dejah Madhusankar</h1>
        <nav className="flex flex-wrap gap-3 mt-4 md:mt-0">
          {tabs.map((t) => (
            <TabButton key={t.key} id={t.key} label={t.label} />
          ))}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {tab === 'home' && (
            <motion.section key="home" variants={fade} initial="hidden" animate="show" exit="exit" className="text-center">
              <h2 className="text-3xl font-bold">Hello! I’m Dejah.</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Researcher in NLP and Computer Vision. I love building systems that understand scenes — and performing Bharatanatyam that explores rhythm and emotion. This portfolio bridges both worlds.</p>
            </motion.section>
          )}

          {tab === 'research' && (
            <motion.section key="research" variants={fade} initial="hidden" animate="show" exit="exit">
              <h2 className="text-2xl font-semibold mb-4">Research</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold">Multi-Label Emotion Classification in Urdu</h3>
                  <p className="text-gray-600 dark:text-gray-300">Published at FIRE 2022. Developed an Urdu emotion detection model tackling overlapping emotions in text.</p>
                </div>
                <div>
                  <h3 className="font-bold">Live Video Captioning System</h3>
                  <p className="text-gray-600 dark:text-gray-300">A real-time captioning pipeline for short-form video understanding. Combines CNN + Transformer-based vision encoders.</p>
                </div>
              </div>
            </motion.section>
          )}

          {tab === 'projects' && (
            <motion.section key="projects" variants={fade} initial="hidden" animate="show" exit="exit">
              <h2 className="text-2xl font-semibold mb-4">Fun Projects</h2>
              <ul className="space-y-5">
                <li>
                  <h3 className="font-bold">Attention Weight Visualizer</h3>
                  <p className="text-gray-600 dark:text-gray-300">Interactive tool for visualizing attention weights across epochs for neural models.</p>
                </li>
                <li>
                  <h3 className="font-bold">Generative Music Dancer</h3>
                  <p className="text-gray-600 dark:text-gray-300">A playful system that generates beats matching Bharatanatyam poses detected in video frames.</p>
                </li>
              </ul>
            </motion.section>
          )}

          {tab === 'dance' && (
            <motion.section key="dance" variants={fade} initial="hidden" animate="show" exit="exit">
              <h2 className="text-2xl font-semibold mb-4">Dance Performances</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-w-16 aspect-h-9 bg-black rounded overflow-hidden">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Brahmam Okate" allowFullScreen className="w-full h-full"></iframe>
                  </div>
                  <h3 className="mt-2 font-bold">Brahmam Okate</h3>
                  <p className="text-gray-600 dark:text-gray-300">A classical Bharatanatyam performance exploring devotion and rhythm.</p>
                </div>
                <div>
                  <div className="aspect-w-16 aspect-h-9 bg-black rounded overflow-hidden">
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Fusion Piece" allowFullScreen className="w-full h-full"></iframe>
                  </div>
                  <h3 className="mt-2 font-bold">Fusion Choreography</h3>
                  <p className="text-gray-600 dark:text-gray-300">Experimenting with classical movements and contemporary rhythms.</p>
                </div>
              </div>
            </motion.section>
          )}

          {tab === 'blog' && (
            <motion.section key="blog" variants={fade} initial="hidden" animate="show" exit="exit">
              <h2 className="text-2xl font-semibold mb-4">Blog</h2>
              <div className="space-y-6">
                <article>
                  <h3 className="font-bold">Rhythm in Code</h3>
                  <p className="text-gray-600 dark:text-gray-300">When coding feels like choreography — structure, tempo, and improvisation intertwine.</p>
                </article>
                <article>
                  <h3 className="font-bold">Bridging Modalities</h3>
                  <p className="text-gray-600 dark:text-gray-300">How dance can teach us about multimodal machine learning — perception through coordination.</p>
                </article>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
        © {new Date().getFullYear()} Dejah Madhusankar — Made with ❤️ using React & Framer Motion
      </footer>
    </div>
  );
}