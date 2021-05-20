import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Skill_Item from './Skill_Item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';

const Skills = ({skills}) => {

    return (
        <div className="skills">            
            <h3 className="Skills-title"><FontAwesomeIcon icon={faChartLine}/> Skills</h3>
            {skills?.map( skill => { 
                return <Skill_Item key={skill.name} skills = {skill}/>            
            })}
            
        </div>
    );
}

export default Skills;