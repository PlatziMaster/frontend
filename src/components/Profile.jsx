import React from 'react';
import { getData2 } from '../utils/getData';
class Profile extends React.Component {
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
        <h1 className="Profile-title">About-me</h1>
        <h5 className="Profile-desc">
          I really like the programation, my fascination by the code and the
          idea of create applications (mobile and web) is to find new forms of
          resolve problems abording the logical method and maths, one of my
          purposes is to see the advancement of artifial intelligence, grow as
          programmer and as profesional
        </h5>
      </div>
    );
  }
}

export default Profile;
