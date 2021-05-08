import React from 'react';
import PropTypes from 'prop-types';
class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="Profile-title">About me</h1>
        <h5 className="Profile-desc">{this.props.Profile}</h5>
      </div>
    );
  }
}
Profile.propTypes = {
  Profile: PropTypes.string,
};
export default Profile;
