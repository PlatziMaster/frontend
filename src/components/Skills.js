import React from 'react';
import './styles/Skills.styl';
import getData from '../utils/getData';

class Skills extends React.Component {
  state = {
    data: {
      'skills': [
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
    const { skills } = this.state.data;
    return (
      <div className='Skills'>
        <h1 className='Skills-title'> this is ma Skills</h1>
        <div className='Skills-item-container'>
          {skills.map((item) => {
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

export default Skills;
