import React from 'react';
import '../styles/components/InterestItem.styl';

const InterestItem = (props) => {
  const data = props.interest.interest;
  return (
    <>
      {data.map((interset, index) => {
        return (
          <div className={`${props.className} shadow-border`} key={index}>
            {interset}
          </div>
        );
      })}
    </>
  );
}

export default InterestItem;