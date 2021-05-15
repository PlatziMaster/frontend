import React, { Component } from 'react';
import '../styles/components/Languages.styl';
import getData from '../utils/getData';
import LanguagesItem from './LanguagesItem';

class Languages extends Component {

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
        <h1 className="title">Languages</h1>
        <div className="Language-items-list list">
          <LanguagesItem languages={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Languages;