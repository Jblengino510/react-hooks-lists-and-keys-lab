import React from "react";

function ProjectItem({ name, about, technologies }) {
  let technologiesArr = technologies.map(language => {
    return <span key={language}>{language}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesArr}
      </div>
    </div>
  );
}

export default ProjectItem;
