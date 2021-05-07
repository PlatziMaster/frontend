import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Interest extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.items.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return ('Loading...');
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className='halfWidth mintColor leftContainer commonText'>
        <div className='commonText'>
          <h1>Interest</h1>
          <div className='tablecolumn'>
            {this.state.data.interest.map((item, id) => {
              return (
                <p id={id} className='listeditemsInterest'>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Interest;
