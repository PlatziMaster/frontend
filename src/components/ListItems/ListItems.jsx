import React from 'react';
import '../../styles/components/ListItems.styl';

const ListItems = ({ listName, items, columnsNumber = 1 }) => {
  const renderItems = () => {
    return items.map(item => <li key={item} className={`${listName}-item`}>{item}</li>);
  };
  return (
    <div className='List'>
      <ul className={`Columns Columns-${columnsNumber}`}>
        {renderItems()}
      </ul>
    </div>
  );
};

export default ListItems;
