import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
class Skills extends React.Component {
  render() {
    return (
      <div className="container-2">
        <h1 className="Skills-title">Skills</h1>
        <h4 className="Skills-item">
          {this.props.skills ? this.props.skills[0].name : null}{' '}
          {this.props.skills ? this.props.skills[0].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.props.skills ? this.props.skills[1].name : null}{' '}
          {this.props.skills ? this.props.skills[1].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.props.skills ? this.props.skills[2].name : null}{' '}
          {this.props.skills ? this.props.skills[2].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.props.skills ? this.props.skills[3].name : null}{' '}
          {this.props.skills ? this.props.skills[3].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.props.skills ? this.props.skills[4].name : null}{' '}
          {this.props.skills ? this.props.skills[4].percentage : null}
        </h4>
      </div>
    );
  }
}
Skills.propTypes = {
  skills: PropTypes.array,
};
export default Skills;
