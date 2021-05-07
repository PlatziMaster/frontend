import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class About extends React.Component {
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
      <div className='halfWidth mintColor leftContainer'>
        <div className=' commonText'>
          <h1>Academic</h1>
          <div className='infoAcademic'>
            {this.state.data.Academic.map((item, id) => {
              return (
                <div className='flexingRow'>
                  <p id={id} className='listeditemsAcademic'>
                    {item.degree}
                  </p>
                  <p id={id} className='listeditemsAcademic'>
                    {item.description}
                  </p>
                  <p id={id} className='listeditemsAcademic'>
                    {item.endDate}
                  </p>
                  <p id={id} className='listeditemsAcademic'>
                    {item.institution}
                  </p>
                  <p id={id} className='listeditemsAcademic'>
                    {item.startDate}
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
export default About;
