import React from 'react';
import PropTypes from 'prop-types';

class Academic extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-2">
          <h1 className="Academic-title">Academic</h1>
          <h4 className="Academic-item">
            {this.props.Academic ? this.props.Academic[2].degree : null}
            {' => '}
            {this.props.Academic ? this.props.Academic[2].institution : null}
            <br />
            {this.props.Academic ? this.props.Academic[2].startDate : null}
            {' - '}
            {this.props.Academic ? this.props.Academic[2].endDate : null}
            {' in '}
            {this.props.Academic ? this.props.Academic[2].description : null}
          </h4>
          <h4 className="Academic-item">
            {this.props.Academic ? this.props.Academic[1].degree : null}
            {' => '}
            {this.props.Academic ? this.props.Academic[1].institution : null}
            <br />
            {this.props.Academic ? this.props.Academic[1].startDate : null}
            {' - '}
            {this.props.Academic ? this.props.Academic[1].endDate : null}
            {' in '}
            {this.props.Academic
              ? this.props.Academic[1].description
              : null}
          </h4>
          <h4 className="Academic-item">
            {this.props.Academic ? this.props.Academic[0].degree : null}
            {' => '}
            {this.props.Academic
              ? this.props.Academic[0].institution
              : null}
            <br />
            {this.props.Academic ? this.props.Academic[0].startDate : null}
            {' - '}
            {this.props.Academic ? this.props.Academic[0].endDate : null}
            {' in '}
            {this.props.Academic
              ? this.props.Academic[0].description
              : null}
          </h4>
        </div>
      </React.Fragment>
    );
  }
}
Academic.propTypes = {
  Academic: PropTypes.array,
};
export default Academic;
