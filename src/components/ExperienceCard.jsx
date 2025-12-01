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
}) => {
  return (
    <div className="timeline-item">
      <div className="card">
        <div className="card-header">
          <h3>{role}</h3>
          <span className="period">{period}</span>
        </div>

        <p className="company">{company}</p>

        <ul className="bullets">
          {bullets.map((item, idx) => {
            if (typeof item === "string") {
              return (
                <li className="single-bullet" key={idx}>
                  {item}
                </li>
              );
            }

            // If bullet has sub-bullets
            return (
              <li className="single-bullet" key={idx}>
                {item.text}
                {item.sub && (
                  <ul className="sub-bullets">
                    {item.sub.map((s, j) => (
                      <li className="single-bullet" key={j}>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {section && <h4 className="sub-title">{section}</h4>}

        {achievements && (
          <ul className="bullets">
            {achievements.map((a, i) => (
              <li className="single-bullet" key={i}>
                {a}
              </li>
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
