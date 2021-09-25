import React from 'react';
import './styles/Experience.styl';
import getData from '../utils/getData';

class Experience extends React.Component {
  state = {
    data: {
      'experience': [{
        'company': '',
        'endDate': '',
        'jobDescription': '',
        'jobTitle': '',
        'startDate': '',
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
    const { experience } = this.state.data;

    return (

      <div className='Experience col-3'>
        <h1 className='title'> Experience</h1>
        <div className='Experience-item-container'>
          {experience.map((item) => {
            return (
              <div className='Experience-item item'>
                <div className='Experience-item-title item-title'>
                  <div className="bullet"></div>
                  {' '}
                  <strong>{item.jobTitle}</strong>
                </div>
                <div>
                  {' '}
                  {item.company}
                </div>
                <div>
                  {' '}
                  {item.startDate}
                  -
                  {item.endDate}
                </div>
                <div>
                  {' '}
                  {item.jobDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    );
  }

}

export default Experience;
