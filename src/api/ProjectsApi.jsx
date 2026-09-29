import "../styles/Projects.css";
import { useState, useEffect } from "react";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //if (loading) return <p>Loading ...</p>;

  return (
    <>
      <div>
        <p>The following are projects from api</p>
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
        <p>the following are projects</p>
      </div>
    </>
  );
}

export default ProjectsList;
