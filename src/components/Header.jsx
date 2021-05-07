import React from 'react';
import { getData2 } from '../utils/getData';
class Header extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    let res = getData2('http://localhost:3000/data');
    let data = await res;
    console.log(data);
    this.setState({ data });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="avatar"
              src={this.state.data.avatar}
              alt="Photo of Sergio"
            />
          </div>
          <div className="col">
            <div className="container">
              <h1 className="Header-title">
                {this.state.data.name}
              </h1>
              <div>
                <h5 className="Header-job-title">
                  {this.state.data.profession}
                </h5>
              </div>
              <div>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
