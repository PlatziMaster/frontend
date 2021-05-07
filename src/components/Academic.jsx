import React from 'react';
import { getData2 } from '../utils/getData';

class Academic extends React.Component {
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
      <React.Fragment>
        <div className="container-2">
          <h1 className="Academic-title">Academic</h1>
          <h4 className="Academic-item">
            {this.state.data.Academic
              ? this.state.data.Academic[2].degree
              : null}
            {' => '}
            {this.state.data.Academic
              ? this.state.data.Academic[2].institution
              : null}
            <br />
            {this.state.data.Academic
              ? this.state.data.Academic[2].startDate
              : null}
            {' - '}
            {this.state.data.Academic
              ? this.state.data.Academic[2].endDate
              : null}
            {' in '}
            {this.state.data.Academic
              ? this.state.data.Academic[2].description
              : null}
          </h4>
          <h4 className="Academic-item">
            {this.state.data.Academic
              ? this.state.data.Academic[1].degree
              : null}
            {' => '}
            {this.state.data.Academic
              ? this.state.data.Academic[1].institution
              : null}
            <br />
            {this.state.data.Academic
              ? this.state.data.Academic[1].startDate
              : null}
            {' - '}
            {this.state.data.Academic
              ? this.state.data.Academic[1].endDate
              : null}
            {' in '}
            {this.state.data.Academic
              ? this.state.data.Academic[1].description
              : null}
          </h4>
          <h4 className="Academic-item">
            {this.state.data.Academic
              ? this.state.data.Academic[0].degree
              : null}
            {' => '}
            {this.state.data.Academic
              ? this.state.data.Academic[0].institution
              : null}
            <br />
            {this.state.data.Academic
              ? this.state.data.Academic[0].startDate
              : null}
            {' - '}
            {this.state.data.Academic
              ? this.state.data.Academic[0].endDate
              : null}
            {' in '}
            {this.state.data.Academic
              ? this.state.data.Academic[0].description
              : null}
          </h4>
        </div>
      </React.Fragment>
    );
  }
}

export default Academic;
