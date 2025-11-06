import React, { useState } from "react";
import "../styles/Research.css";

const ResearchPaper = ({ paper }) => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="research-card">
      <div className="paper-info">
        <h2 className="paper-title">
          {paper.title} <span className="citation">{paper.citation}</span>
        </h2>
        <p
          className="authors"
          dangerouslySetInnerHTML={{ __html: paper.authors }}
        />
        {paper.abstract && paper.link && (
          <div className="button-group">
            <button
              className="btn-abstract"
              onClick={() => setShowAbstract(!showAbstract)}
            >
              {showAbstract ? "Hide Abstract" : "Abstract"}
            </button>
            <a className="btn-paper" href={paper.link}>
              Paper
            </a>
          </div>
        )}
      </div>

      {/* Abstract Drawer */}
      <div className={`abstract-drawer ${showAbstract ? "open" : ""}`}>
        <p>{paper.abstract}</p>
      </div>
    </div>
  );
};

export default ResearchPaper;
