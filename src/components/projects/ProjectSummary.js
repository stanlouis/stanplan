import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content blue-grey-text text-darken-4">
        <div className="card-title">{project.title}</div>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
