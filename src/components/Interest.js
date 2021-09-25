import React from 'react';
import './styles/Interest.styl';
import getData from '../utils/getData';

class Interest extends React.Component {
  state = {
    data: {
      'interest': [],
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
    const { interest } = this.state.data;
    return (
      <div className='Interest'>
        <h1 className='Interest-title title'>Interest</h1>
        <div className='Interest-item-container'>
          {interest.map((item) => {
            return (
              <div className='Interest-item item-title'>
                <div className="bullet"></div>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default Interest;
