import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            quibusdam nesciunt dolorum similique eveniet tempore at. Tenetur
            voluptas similique nostrum accusantium magni. Veritatis suscipit
            possimus sit pariatur eum optio officia?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Stanley Louis</div>
          <div>2nd November, 6AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
