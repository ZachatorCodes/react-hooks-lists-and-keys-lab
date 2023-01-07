import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectItems = projects.map(item => {
    return (
      <ProjectItem about={item.about} key={item.id} name={item.name} technologies={item.technologies}></ProjectItem>
    )
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
