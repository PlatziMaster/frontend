import React from 'react';
import api from '../api.js';
import 'babel-polyfill';
import About from './About';

class Header extends React.Component {
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
      <div className='fullWidth headerColor HeaderClass'>
        <img src={this.state.data.avatar} />

        <div className='infoHeader'>
          <h1>{this.state.data.name}</h1>
          <p>{this.state.data.profession}</p>
          <About className='About' phone={this.state.data.phone} email={this.state.data.email} website={this.state.data.website} address={this.state.data.address} />
          {/*Imported Section from About*/}
        </div>

      </div>
    );
  }
}
export default Header;
