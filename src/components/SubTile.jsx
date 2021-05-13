import React from 'react';

const SubTile = ({color, company, jobTitle, startDate, endDate, jobDescription })=>{
    return(
        <li className={`Subtile Subtile--${color} Experience-item Academic-item`}>
            <h3 className="Subtile__degree">{company}</h3>
            <h4 className="Subtile__jobTitle">{jobTitle}</h4>
            <span className="Subtile__date">{startDate} - {endDate} </span>
            <p className="Subtile__jobDescription">{jobDescription}</p>
        </li>
    )
}

export default SubTile;