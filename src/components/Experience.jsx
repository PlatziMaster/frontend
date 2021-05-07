import React from 'react';
import { getData2 } from '../utils/getData';
class Experience extends React.Component {
  state = {
    data: {},
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
            <h4 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[0].jobTitle
                : null}
              {' on '}
              {this.state.data.experience
                ? this.state.data.experience[0].company
                : null}
              {' - '}
              {this.state.data.experience
                ? this.state.data.experience[0].endDate
                : null}
            </h4>
          </div>
          <div className="col">
            <h5 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[0].jobDescription
                : null}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[1].jobTitle
                : null}
              {' on '}
              {this.state.data.experience
                ? this.state.data.experience[1].company
                : null}
              {' - '}
              {this.state.data.experience
                ? this.state.data.experience[1].endDate
                : null}
            </h4>
          </div>
          <div className="col">
            <h5 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[1].jobDescription
                : null}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[2].jobTitle
                : null}
              {' on '}
              {this.state.data.experience
                ? this.state.data.experience[2].company
                : null}
              {' - '}
              {this.state.data.experience
                ? this.state.data.experience[2].endDate
                : null}
            </h4>
          </div>
          <div className="col">
            <h5 className="Experience-item">
              {this.state.data.experience
                ? this.state.data.experience[2].jobDescription
                : null}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
