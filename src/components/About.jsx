import React, { Component } from 'react';
import '../styles/components/About.styl';
import getData from '../utils/getData.js';

class About extends Component {

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
      <>
        <div className="About__picture">
          <img className="About__picture-image shadow-border" src={data.avatar} alt={`Photo: ${data.name}`} />
        </div>
        <div className="About__info">
          <h1 className="About-title title">{data.name}</h1>
          <h4 className="About-job-title">{data.profession}</h4>
          <div className="About__contact">
            <a className="About-item About-item--phone" href={`tel:${data.phone}`} target="_blank">{data.phone}</a>
            <a className="About-item About-item--email" href={`mailto:${data.email}`} target="_blank">{data.email}</a>
            <a className="About-item About-item--website" href={data.website} target="_blank">{data.website}</a>
          </div>
          <h5 className="About-address"><i>{data.address}</i></h5>
        </div>
      </>
    );
  }
}

export default About;