import React from 'react';
import { getData2 } from '../utils/getData';
class Interest extends React.Component {
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
        <h1 className="Interest-title">Interest-title</h1>
        <h4 className="Interest-item">Interest-item</h4>
        <h4 className="Interest-item">Interest-item</h4>
        <h4 className="Interest-item">Interest-item</h4>
      </div>
    );
  }
}

export default Interest;
