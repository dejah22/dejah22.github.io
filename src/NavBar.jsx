import React from 'react';

function NavBar({ current, onNav }) {
  const tabs = [
    { key: 'home', label: 'Home' },
    { key: 'research', label: 'Research' },
    { key: 'projects', label: 'Fun Projects' },
    { key: 'dance', label: 'Dance' },
    { key: 'blog', label: 'Blog' },
  ];

  return (
    <nav className="navbar">
      {tabs.map(tab => (
        <a
          key={tab.key}
          href="#"
          className={current === tab.key ? 'active' : ''}
          onClick={e => {
            e.preventDefault();
            onNav(tab.key);
          }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
