import React, {useState} from 'react';
import Academic_item from './Academic_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';

const Academic = ({Academic}) => {

    return (

        <div className="academic">            
            <h3><FontAwesomeIcon icon={faUniversity}/> Academic</h3>
            {Academic?.map((item) => {
                return <Academic_item className="Academic-item" key={item.degree} academic={item}/>
            })}
        </div>
    );
}

export default Academic;
