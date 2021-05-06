import React from 'react';
import { getData2 } from '../utils/getData';

class Academic extends React.Component {
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
      <React.Fragment>
        <div className="container">
          <h1 className="Academic-title">Academic-title</h1>
          <h4 className="Academic-item">Academic-item</h4>
          <h4 className="Academic-item">Academic-item</h4>
          <h4 className="Academic-item">Academic-item</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default Academic;
