import React from 'react';
import api from '../api.js';
import 'babel-polyfill';

class Experience extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData= async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.items.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if (this.state.loading === true) {
      return ('Loading...');
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className='fullWidth mintColor'>
        <div className='infoExperience commonText'>
          <h1>Experience</h1>
          <div className='tablecolumn'>
            {this.state.data.certificate.map((item, id) => {
              return (
                <div>
                  <p className='listeditems' id={id}>
                    {item.date}
                  </p>
                  <p className='listeditems' id={id}>
                    {item.description}
                  </p>
                  <p className='listeditems' id={id}>
                    {item.institution}
                  </p>
                  <p className='listeditems' id={id}>
                    {item.name}
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
export default Experience;
