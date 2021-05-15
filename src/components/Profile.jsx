import React, { Component } from 'react';
import getData from '../utils/getData';

class Profile extends Component {

  // Inizialize the state
  state = {
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({
      error: null,
    })
    try {
      const data = await getData(); // Take the data
      this.setState({
        data: data
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  }

  render() {
    const data = this.state.data;
    if (this.state.error || !this.state.data) { // Show an error if we catch it
      return this.state.error || 'No data found';
    }
    return (
      <div className="container container--full">
        <h1 className="Profile-title">{data.profession}</h1>
        <p className="Profile-desc">{data.Profile}</p>
      </div>
    );
  }
}

export default Profile;