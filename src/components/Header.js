import React from 'react';
import About from './About';
import './styles/Header.styl';
const regeneratorRuntime = require("regenerator-runtime");


class Header extends React.Component {
  state = {
    data: {
      "name": "",
      "profession": "",
      "address": "",
      "email": "",
      "website": "",
      "phone": "",
      "avatar": "",
      "Profile": "",
    }

  }

  componentDidMount(){
    console.log("1. tomando los datos")
    this.getData()
    
    
  }

  getData = () =>{
    const url = "http://localhost:3000/data"
    fetch(url)
      .then( response =>{ return response.json()
        .then(data => { console.log(data)
              return this.setState({data:data})});
      })
    
  }
    
  render() {
    console.log(this.state.data.name)
    const data = this.state.data
    return (
      <div className='Header'>
        <div className='Header__img'>
          <img src={data.avatar} alt='' />
        </div>
        <div className='Header__main-info'>
          <h1 className='Header-title'>{data.name}</h1>
          <div className='Header-job-title'>{data.profession}r</div>
          <div className='Header-phone'>{data.phone}</div>
          <div className='Header-email'>{data.email}</div>
          <div className='Header-website'>{data.website}</div>
          <div className='Header-address'>{data.address}</div>
        </div>
        <div className='Header__about'>
          <About />
        </div>

      </div>
    );
  }

}

export default Header;
