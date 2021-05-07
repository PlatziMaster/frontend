import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Languages extends React.Component {
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
      <div className='halfWidth rightContainer mintColor'>
        <div className='commonText'>
          <h1>Language</h1>
          <div>
            {this.state.data.languages.map((item, id) => {
              return (
                <div className='tablerow'>
                  <p id={id} className='listeditemsAcademic'>
                    {item.name}
                  </p>
                  <p id={id} className='listeditemsAcademic'>
                    {item.percentage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Languages;
