import React from 'react';
import About from './About';
import './styles/Header.styl';
import getData from '../utils/getData';

const regeneratorRuntime = require('regenerator-runtime');

class Header extends React.Component {
  state = {
    data: {
      'name': '',
      'profession': '',
      'address': '',
      'email': '',
      'website': '',
      'phone': '',
      'avatar': '',
      'Profile': '',
      'social': [
        {
          'name': '',
          'url': '',
        }],
    },

  }

  componentDidMount() {
    console.log('1. tomando los datos');
    this.fetchData();

  }

  fetchData = () => {
    getData('')
      .then((data) => {
        console.log(data);
        this.setState({ data });
      });
    ;

  }

  render() {
    console.log(this.state.data.name);
    const { data } = this.state;
    return (
      <div className='Header'>
        <div className='Header__img-container'>
          <img src={data.avatar} alt='' className='Header__img' />
          
        </div>
        <div className='Header__main-info'>
          <h1 className='title'>{data.name}</h1>
          <div className='Header-job-title'>
            {data.profession}
          </div>
          <div className='Header-phone'>{data.phone}</div>
          <div><a className='Header-email' href={data.email}>{data.email}</a></div>
          <div><a className='Header-website' href={data.website}>{data.website}</a></div>
          <div className='Header-address'>{data.address}</div>
          
        </div>
        <div className='Header__about'>
          <About
            social={this.state.data.social}
          />
        </div>

      </div>
    );
  }

}

export default Header;
