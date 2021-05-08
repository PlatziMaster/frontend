import React from 'react';
import PropTypes from 'prop-types';
class Header extends React.Component {

  
  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="avatar"
              src={this.props.avatar}
              alt="Photo of Sergio"
            />
          </div>
          <div className="col">
            <div className="container">
              <h1 className="Header-title">{this.props.name}</h1>
              <div>
                <h5 className="Header-job-title">
                {this.props.profession}
                </h5>
              </div>
              <div>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
};
export default Header;
