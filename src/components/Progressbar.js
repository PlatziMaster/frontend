import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.percentage = props.skill.percentage;
    this.name = props.skill.name;
    this.firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
    this.firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
  }

  getProgress() {
    const now = new Date().getTime();
    return Math.round((now - this.firstDayOfYear) / (this.firstDayOfNextYear - this.firstDayOfYear) * 100);
  }

  render() {
    // const progress = this.getProgress();
    return (
      <div className='container'>
        <h3>{this.name}</h3>
        <div className='progressbar-container'>
          <div className='progressbar-complete' style={{ width: `${this.percentage}%` }}>
            <div className='progressbar-liquid' />
          </div>
          <span className='progress'>
            {this.percentage}
            %
          </span>
        </div>
      </div>
    );
  }
}
export default ProgressBar;
