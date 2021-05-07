import React from 'react';
import getData from '../utils/getData';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class About extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    let res = getData('http://localhost:3000/data');
    let data = await res;

    this.setState({ data });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box">
            <h6 className="About-title">{this.state.data.phone}</h6>
          </div>
          <div>
            <h6>{this.state.data.email}</h6>
          </div>
          <div className="box">
            <a
              className="social-icon"
              href={
                this.state.data.social ? this.state.data.social[3].url : null
              }
            >
              <LinkedInIcon className="social-icon" />
            </a>
          </div>
          <div className="box">
            <h6 className="About-item">{this.state.data.address}</h6>
          </div>
          <div className="box">
            <h6 className="About-item">{this.state.data.website}</h6>
          </div>
          <div className="box">
            <h6 className="About-item">{this.state.data.website}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
