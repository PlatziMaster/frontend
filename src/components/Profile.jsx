import React from 'react';
import { getData } from '../utils/getData';
class Profile extends React.Component {
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
        <h1 className="Profile-title">About me</h1>
        <h5 className="Profile-desc">
        {this.state.data.Profile}
        </h5>
      </div>
    );
  }
}

export default Profile;
