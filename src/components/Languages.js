import React from 'react';
import './styles/Languages.styl';
import getData from '../utils/getData';

class Languages extends React.Component {
  state = {
    data: {
      'languages': [
        {
          'name': '',
          'percentage': '',
        }],
    },

  }

  componentDidMount() {
    this.fetchData();

  }

  fetchData = () => {
    getData('')
      .then((data) => {
        this.setState({ data });
      });
    ;

  }

  render() {
    const { languages } = this.state.data;
    return (
      <div className='Languages'>
        <h1 className='Languages-title'> this is ma Languages</h1>
        <div className='Skills-item-container'>
          {languages.map((item) => {
            return (
              <div className='Skills-item'>
                <div>
                  {' '}
                  {item.name}
                </div>
                <div>
                  {' '}
                  {item.percentage}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default Languages;
