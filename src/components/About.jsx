import React from 'react';
import PropTypes from 'prop-types';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box">
            <h6 className="About-title">{this.props.phone}</h6>
          </div>
          <div>
            <h6>{this.props.email}</h6>
          </div>
          <div className="box">
            <a
              className="social-icon"
              href={this.props.social ? this.props.social[3].url : null}
            >
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
          <div className="box">
            <h6 className="About-item">{this.props.address}</h6>
          </div>
          <div className="box">
            <h6 className="About-item">{this.props.website}</h6>
          </div>
          <div className="box">
            <h6 className="About-item">{this.props.website}</h6>
          </div>
        </div>
      </div>
    );
  }
}
About.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  social: PropTypes.array,
  address: PropTypes.string,
  website: PropTypes.string,
};
export default About;
