import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Profile extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData= async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.items.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if (this.state.loading === true) {
      return ('Loading...');
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className='fullWidth mintColor'>
        <div className='commonText'>
          <h1>Profile Caption</h1>
          <p>{this.state.data.Profile}</p>
        </div>
      </div>
    );
  }
}
export default Profile;
