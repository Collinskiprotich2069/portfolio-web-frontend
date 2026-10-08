import React from 'react';
import '../styles/Projects.css';
import ProjectsList from '../api/ProjectsApi';

const Projects = React.forwardRef((props, ref) => {
    return (
      <>
        <div className="projects-card" ref={ref}>
        <ProjectsList/>
        </div>
      </>
    );
    Projects.displayName = 'Projects';

});

export default Projects;
