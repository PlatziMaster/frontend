import React from 'react';
import './styles/Academic.styl';
import getData from '../utils/getData';

class Academic extends React.Component {
  state = {
    data: {
      'Academic': [{
        'degree': '',
        'description': ' ',
        'endDate': '',
        'institution': '',
        'startDate': '',
      }],
      'certificate': [
        {
          'date': '',
          'description': ' ',
          'institution': '',
          'name': '' }],

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
    const academic = this.state.data.Academic;
    const { certificate } = this.state.data;
    return (
      <div className='Academic'>
        <h1 className='Academic-title'> this is ma Academic</h1>
        <div className='Academic-item-container'>
          {academic.map((item) => {
            return (
              <div className='Academic-item'>
                <div>
                  {' '}
                  <strong>{item.degree}</strong>
                </div>
                <div>
                  {' '}
                  {item.institution}
                </div>
                <div>
                  {' '}
                  {item.startDate}
                  -
                  {item.endDate}
                </div>
                <div>
                  {' '}
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className='Academic__certificate-item-container'>
          {certificate.map((item) => {
            return (
              <div className='Academic__certificate-item'>
                <div>
                  {' '}
                  <strong>{item.name}</strong>
                </div>
                <div>
                  {' '}
                  {item.institution}
                </div>
                <div>
                  {' '}
                  {item.date}
                </div>
                <div>
                  {' '}
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    );
  }

}

export default Academic;
