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

      <div className='Experience'>
        <h1 className='Experience-title'> this is ma Experience</h1>
        <div className='Experience-item-container'>
          {experience.map((item) => {
            return (
              <div className='Experience-item'>
                <div>
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
                  what i did?
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
