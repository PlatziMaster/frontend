import React from 'react';
import PropTypes from 'prop-types';
class Languages extends React.Component {

  render() {
    return (
      <div className="container-2">
        <h1 className="Languages-title">Languages</h1>
        <h4 className="Languages-item">
          {this.props.languages ? this.props.languages[0].name : null}{' '}
          {this.props.languages
            ? this.props.languages[0].percentage
            : null}
        </h4>
        <h4 className="Languages-item">
          {this.props.languages ? this.props.languages[1].name : null}{' '}
          {this.props.languages
            ? this.props.languages[1].percentage
            : null}
        </h4>
        <h4 className="Languages-item">
          {this.props.languages ? this.props.languages[1].name : null}{' '}
          {this.props.languages
            ? this.props.languages[1].percentage
            : null}
        </h4>
      </div>
    );
  }
}
Languages.propTypes = {
  languages: PropTypes.array,
};
export default Languages;
