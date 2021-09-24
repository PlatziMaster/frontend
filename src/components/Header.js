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
        <div className='Header__img'>
          <img src={data.avatar} alt='' />
        </div>
        <div className='Header__main-info'>
          <h1 className='Header-title'>{data.name}</h1>
          <div className='Header-job-title'>
            {data.profession}
            r
          </div>
          <div className='Header-phone'>{data.phone}</div>
          <div className='Header-email'>{data.email}</div>
          <div className='Header-website'>{data.website}</div>
          <div className='Header-address'>{data.address}</div>
        </div>
        <div className='Header__about'>
          <About profile={data.Profile} />
        </div>

      </div>
    );
  }

}

export default Header;
