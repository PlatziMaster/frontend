import React, {useState} from 'react';
import Interest_item from './Interest_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChess} from '@fortawesome/free-solid-svg-icons';

const Interest = ({interest}) => {

    return (
        <div className="interest">            
            <h3 className="Interest-title"><FontAwesomeIcon icon={faChess}/> Interest</h3>
            {interest?.map( inter => {
                return <Interest_item key={inter} interest={inter}/>
            })}
        </div>
    );
}

export default Interest;
