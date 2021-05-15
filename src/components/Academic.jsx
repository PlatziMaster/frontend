import React, { Component } from 'react';
import '../styles/components/Academic.styl';
import AcademicItem from './AcademicItem';
import getData from '../utils/getData';

class Academic extends Component {

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
      <div className="container container--semi Academic">
        <h1 className="Academic-title">Academic</h1>
        <div className="Academic-item-list list">
          <AcademicItem academic={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Academic;