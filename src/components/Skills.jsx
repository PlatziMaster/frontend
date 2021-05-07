import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
class Skills extends React.Component {
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
        <h1 className="Skills-title">Skills</h1>
        <h4 className="Skills-item">
          {this.state.data.skills ? this.state.data.skills[0].name : null}{' '}
          {this.state.data.skills ? this.state.data.skills[0].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.state.data.skills ? this.state.data.skills[1].name : null}{' '}
          {this.state.data.skills ? this.state.data.skills[1].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.state.data.skills ? this.state.data.skills[2].name : null}{' '}
          {this.state.data.skills ? this.state.data.skills[2].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.state.data.skills ? this.state.data.skills[3].name : null}{' '}
          {this.state.data.skills ? this.state.data.skills[3].percentage : null}
        </h4>
        <h4 className="Skills-item">
          {this.state.data.skills ? this.state.data.skills[4].name : null}{' '}
          {this.state.data.skills ? this.state.data.skills[4].percentage : null}
        </h4>
      </div>
    );
  }
}

export default Skills;
