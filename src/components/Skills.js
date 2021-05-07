import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Skills extends React.Component {
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
      return 'Loading...';
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className='halfWidth mintColor rightContainer'>
        <div className='commonText'>
          <h1>Skills</h1>
          <div className='infoSkills'>
            {this.state.data.skills.map((item, id) => {
              return (
                <div className='flexingRow'>
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
export default Skills;
