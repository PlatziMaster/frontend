import React from 'react';
import { getData2 } from '../utils/getData';

class About extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    let res = getData2('http://localhost:3000/data');
    let data = await res;

    this.setState({ data });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="box">
            <h6 className="About-title">
              Phone: +57-321 449 15 59
            </h6>
          </div>
          <div >
            <h6>
              alonzopina7@gmail.com
            </h6>
          </div>
          <div className="box">
            <h6 className="About-item">
              <a href="#">
                Linkedin.com
              </a>
            </h6>
          </div>
          <div className="box">
            <h6 className="About-item">
              <a href="#">
                Linkedin.com
              </a>
            </h6>
          </div>
          <div className="box">
            <h6 className="About-item">
              Guadalajara, Jalisco - Mexico
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
