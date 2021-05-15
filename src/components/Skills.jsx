import React, { Component } from 'react';
import '../styles/components/Skills.styl';
import SkillsItem from './SkillsItem';
import getData from '../utils/getData';

class Skills extends Component {

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
      <div className="container container--semi Skills">
        <h1 className="Skills-title">Skills</h1>
        <div className="Skills-item-list list">
          <SkillsItem skills={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Skills;