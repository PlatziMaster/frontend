import React from 'react';
import { getData2 } from '../utils/getData';
class Experience extends React.Component {
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
        <h1 className="Experience-title">Professional experience</h1>
        <div className="row">
          <div className="col">
            <h4 className="Experience-item">Salesman</h4>
          </div>
          <div className="col">
            <h5 className="Experience-item">
              Sales management and portfolio collection is a family business
              dedicated to the sales and distribution of products for food
              contact
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="Experience-item">Experience-item</h4>
          </div>
          <div className="col">
            <h5 className="Experience-item">Experience-item</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
