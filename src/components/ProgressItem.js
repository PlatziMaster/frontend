import React from 'react';
import { ProgressBar, Badge } from 'react-bootstrap';
//import PropTypes from 'prop-types'

const ProgressItem = ({ name, percentage }) => {
  let color = 'success';
  const percent = parseInt(percentage, 10);

  if (percent <= 30) {
    color = 'info';
  } else if (percent <= 70) {
    color = 'primary';
  }

  return (
    <div className='d-flex p-1'>
      <Badge variant={color} className=' w-25 mr-2'>
        {name}
      </Badge>
      <ProgressBar
        striped
        variant={color}
        now={percent}
        label={percentage}
        className='w-75'
      />
    </div>
  );
};

ProgressItem.propTypes = {};

export default ProgressItem;
