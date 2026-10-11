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

  return (
    <>
      <div>
        {projects.map((project) => {
          return (
            <div className="projects-card">
              <p>
                <li key={project.id}>
                  <div className="projects-name-description">
                    <ul>
                      <p>
                        <a
                          href="https://collins-kiprotich.vercel.app/"
                          target="no_blank"
                        >
                          {project.name}
                        </a>
                      </p>
                    </ul>
                    <ul>
                      <p>{project.description}</p>
                    </ul>
                  </div>
                  <ul>
                    <a
                      href="https://collins-kiprotich.vercel.app/"
                      target="no_blank"
                    >
                      <img src={project.image} alt="project-image" />
                    </a>
                  </ul>
                </li>
              </p>
              <p>Other Projects in Progress</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectsList;
