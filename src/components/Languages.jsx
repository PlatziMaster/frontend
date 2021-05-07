import React from 'react';
import getData from '../utils/getData';
class Languages extends React.Component {
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
        <h1 className="Languages-title">Languages</h1>
        <h4 className="Languages-item">
          {this.state.data.languages ? this.state.data.languages[0].name : null}{' '}
          {this.state.data.languages
            ? this.state.data.languages[0].percentage
            : null}
        </h4>
        <h4 className="Languages-item">
          {this.state.data.languages ? this.state.data.languages[1].name : null}{' '}
          {this.state.data.languages
            ? this.state.data.languages[1].percentage
            : null}
        </h4>
        <h4 className="Languages-item">
          {this.state.data.languages ? this.state.data.languages[1].name : null}{' '}
          {this.state.data.languages
            ? this.state.data.languages[1].percentage
            : null}
        </h4>
      </div>
    );
  }
}

export default Languages;
