import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const tabs = [
    { name: "Research", path: "/research" },
    { name: "Projects", path: "/projects" },
    { name: "Dance", path: "/dance" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      {/* Left side — Home */}
      <div className="nav-left">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link brand active" : "nav-link brand"
          }
        >
          Dejah's Home
        </NavLink>
      </div>

      {/* Right side — other links */}
      <ul className="nav-list">
        {tabs.map((tab) => (
          <li key={tab.path}>
            <NavLink
              to={tab.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
