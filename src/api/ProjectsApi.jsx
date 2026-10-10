import "../styles/Projects.css";
import { useState, useEffect } from "react";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://portfolio-web-backend-cl1f.onrender.com/api/projects/")
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
                <img src="" alt="project-image"/>
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
        <p>No Projects Available at the moment</p>
        <p>Projects in Progress</p>
      </div>
    </>
  );
}

export default ProjectsList;
