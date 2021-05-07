import React from 'react';
import getData from '../utils/getData';
class Interest extends React.Component {
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
      <div className="container-2">
        <h1 className="Interest-title">Interest</h1>
        <h4 className="Interest-item">
          {this.state.data.interest ? this.state.data.interest[0] : null}
        </h4>
        <h4 className="Interest-item">
          {this.state.data.interest ? this.state.data.interest[1] : null}
        </h4>
        <h4 className="Interest-item">
          {this.state.data.interest ? this.state.data.interest[2] : null}
        </h4>
        <h4 className="Interest-item">
          {this.state.data.interest ? this.state.data.interest[3] : null}
        </h4>
      </div>
    );
  }
}

export default Interest;
