import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Item.styl';

const Item = ({name, percentage}) => {
    return (
      <div className="Div-item Card-glass">
        <b>{name}</b>
        <progress value={percentage} max="100"></progress>
        <b className="B-item-percentage">{percentage} %</b>
      </div>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default Item
