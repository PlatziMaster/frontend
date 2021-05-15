import React, { Component } from 'react';
import '../styles/components/Interest.styl';
import getData from '../utils/getData';
import InterestItem from './InterestItem';

class Interest extends Component {

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
      <div className="container container--semi">
        <h1 className="Interest-title">Interest</h1>
        <div className="Interest-items-list list">
          <InterestItem className="Interest-item" interest={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Interest;