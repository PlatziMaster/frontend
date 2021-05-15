import React, { Component } from 'react';
import '../styles/components/Header.styl';
import Socials from './Socials';
import getData from '../utils/getData';

class Header extends Component {

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
    if (this.state.error || !this.state.data) { // Show an error if we catch it
      return this.state.error || 'No data found';
    }
    return (
      <div className="container container--full Header">
        <Socials socials={this.state.data}/>
        {this.props.children}
      </div>
    );
  }
}

export default Header;