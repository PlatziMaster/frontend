import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CartItem.styl';

const CardItem = ({
  degree,
  description,
  institution,
  startDate,
  endDate,
  name,
  date,
}) => {
  return (
    <article className="Artile-academic Card-glass">
      {name && <h3 className="Article-tile">{name}</h3>}
      {degree && <h3 className="Article-tile">{degree}</h3>}
      <b className="Article-institution">{institution}</b>
      <p className="Aritcle-description">{description}</p>
      {startDate && (
        <div>
          <span>{startDate}</span>
          <span> - </span>
          <span>{endDate}</span>
        </div>
      )}
      {date && <span>{date}</span>}
    </article>
  );
};

CardItem.propTypes = {
  description: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
};

export default CardItem;
