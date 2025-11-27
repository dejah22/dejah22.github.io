import React from "react";
import "../styles/ExperienceCard.css";

const ExperienceCard = ({
  role,
  company,
  period,
  bullets,
  section,
  achievements,
  tags,
  showLine,
  showDot,
}) => {
  return (
    <div className="timeline-item">
      {/* timeline dot */}
      {showDot && <div className="dot" />}

      {/* vertical line only if showLine = true */}
      {showLine && <div className="vertical-line" />}

      <div className="card">
        <div className="card-header">
          <h3>{role}</h3>
          <span className="period">{period}</span>
        </div>

        <p className="company">{company}</p>

        <ul className="bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {section && <h4 className="sub-title">{section}</h4>}

        {achievements && (
          <ul className="bullets">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        <div className="tags">
          {tags.map((t, i) => (
            <span className="tag" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
