import React, {useState} from 'react';
import Languages_item from './Languages_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLanguage} from '@fortawesome/free-solid-svg-icons';

const Languages = ({languages}) => {

    return (
        <div className="languages">
            <div>                
                <h3><FontAwesomeIcon icon={faLanguage}/> Languages</h3>
            </div>
            {languages?.map( language => {
                return <Languages_item key={language.name} language={language}/>
            })}
        </div>
    );
}

export default Languages;
