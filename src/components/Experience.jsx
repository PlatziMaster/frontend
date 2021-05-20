import React, {useState} from 'react';
import Experience_item from './Experience_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';

const Experience = ({experience}) => {

    return (
        <div className="experience">            
            <h3><FontAwesomeIcon icon={faChartBar}/> Experience</h3>
            {experience?.map( exp => {
                   return <Experience_item key={exp.company} experience={exp}/>
            })}            
        </div>
    );
}

export default Experience;
