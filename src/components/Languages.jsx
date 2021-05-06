import React from 'react';
import { getData2 } from '../utils/getData';
class Languages extends React.Component {
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
        <h1 className="Languages-title">Languages-title</h1>
        <h4 className="Languages-item">Languages-item</h4>
        <h4 className="Languages-item">Languages-item</h4>
        <h4 className="Languages-item">Languages-item</h4>
      </div>
    );
  }
}

export default Languages;
