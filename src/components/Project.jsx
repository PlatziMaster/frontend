import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ projectName, complete, url, projectDescription, stak }) => {
  return (
    <article className="Project-article Card-glass">
      <h3 className="Project-title">{projectName}</h3>
      <p className="Project-description">{projectDescription}</p>
      <div className="Project-link">
        {complete && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <i className="bx bx-right-top-arrow-circle"></i>
          </a>
        )}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <p className="Project-stack">{stak}</p>
    </article>
  );
};

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  stak: PropTypes.string.isRequired,
};


export default Project;
