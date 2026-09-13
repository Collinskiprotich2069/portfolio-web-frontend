import { useState, useEffect } from "react";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  /* useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/projects");
        console.log(response.status);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const result = await response.json();
        setProject(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:8000/api/projects")
      .then((res) => res.json())
      .then(data =>  setProjects(data));
     
  }, []);
  

  //if (loading) return <p>Loading ...</p>;

  return (
    <>
      <div>
        <p>The following are projects from api</p>
        <ul>
          {projects.map((project) => {
          <li key={project.id}>
            <p>{project.name}</p>
            <p>{project.description}</p>
            </li>;
          })}
          </ul>
        <p>the following are projects</p>
      </div>
    </>
  );
}

export default ProjectsList;
