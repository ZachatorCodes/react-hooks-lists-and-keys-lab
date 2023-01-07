import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techItems = technologies.map(item => {
    return (
      <span key={item}>{item}</span>
    )
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techItems}
      </div>
    </div>
  );
}

export default ProjectItem;
