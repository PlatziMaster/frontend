import React from 'react';
import './styles/Profile.styl';
import getData from '../utils/getData';

class Profile extends React.Component {
  state = {
    data: {
      'Profile': '',
    },

  }

  componentDidMount() {
    this.fetchData();

  }

  fetchData = () => {
    getData('')
      .then((data) => {
        this.setState({ data });
      });
    ;

  }

  render() {
    return (
      <div className='Profile'>
        <h1 className='Profile.title'> Profile</h1>
        <div className='Profile-desc'>{this.state.data.Profile}</div>
      </div>

    );
  }

}

export default Profile;

