import React from 'react';
import '../styles/Projects.css';
import ProjectsList from '../api/ProjectsApi';

const Projects = React.forwardRef((props, ref) => {
    return (
      <>
        <div className="projects-card" ref={ref}>
          <ProjectsList/>
          <p>Projects</p>
          <li>
            <ul>
              <a>Full stack portfolio website</a>
            </ul>
            <ul>
              <a>Bookstore Website</a>
            </ul>
            <ul>
              <a>Ecommerce Website</a>
            </ul>
          </li>
        </div>
      </>
    );
    Projects.displayName = 'Projects';

});

export default Projects;
