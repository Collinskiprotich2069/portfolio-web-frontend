import "../styles/Projects.css";
import { useState, useEffect } from "react";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/ap/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const proj = () => {
    if (projects) {
      return (
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <p>{project.name}</p>
                <p>{project.description}</p>
              </li>
            );
          })}
        </ul>
      );
    } else if(projects.data === null){
      return <p>No projects moemt available</p>;
    }
  };

  return (
    <>
      <div>
        <p>The following are projects from api</p>
        {proj()}
        <p>the following are projects</p>
      </div>
    </>
  );
}

export default ProjectsList;
