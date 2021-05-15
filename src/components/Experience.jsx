import React, { Component } from 'react';
import '../styles/components/Experience.styl';
import ExperienceItem from './ExperienceItem';
import getData from '../utils/getData';

class Experience extends Component {

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
    if (this.state.error || !this.state.data) { // Show an error if we catch it or we dont have data
      return this.state.error || 'No data found';
    }
    return (
      <div className="container container--full Experience">
        <h1 className="Experience-title">Experience</h1>
        <div className="Experience-item-list list">
          <ExperienceItem experience={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Experience;