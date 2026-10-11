import React from 'react';
import ProjectsList from '../api/ProjectsApi';

const Projects = React.forwardRef((props, ref) => {
    return (
      <>
        <div ref={ref}>
        <ProjectsList/>
        </div>
      </>
    );
    Projects.displayName = 'Projects';

});

export default Projects;
