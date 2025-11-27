import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const isDancePage = location.pathname.includes("/dance");

  const tabs = [
    { name: "Experience", path: "/work-experience" },
    { name: "Research", path: "/research" },
    { name: "Projects", path: "/projects" },
    { name: "Dance", path: "/dance" },
    // { name: "Certifications", path: "/certifications" },
  ];

  return (
    <nav
      className={`navbar${isDancePage ? "-dance" : ""}`}
      aria-label="Main navigation"
    >
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
