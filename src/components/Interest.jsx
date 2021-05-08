import React from 'react';
import PropTypes from 'prop-types';
class Interest extends React.Component {
  render() {
    return (
      <div className="container-2">
        <h1 className="Interest-title">Interest</h1>
        <h4 className="Interest-item">
          {this.props.interest ? this.props.interest[0] : null}
        </h4>
        <h4 className="Interest-item">
          {this.props.interest ? this.props.interest[1] : null}
        </h4>
        <h4 className="Interest-item">
          {this.props.interest ? this.props.interest[2] : null}
        </h4>
        <h4 className="Interest-item">
          {this.props.interest ? this.props.interest[3] : null}
        </h4>
      </div>
    );
  }
}
Interest.propTypes = {
  interest: PropTypes.array,
};
export default Interest;
