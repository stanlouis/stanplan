import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content blue-grey-text text-darken-4">
        <div className="card-title">{project.title}</div>
        <p>Posted by Stanley Louis</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
