import React from 'react';
import '../styles/components/ExperienceItem.scss';

const ExperienceItem = (data) => {
    
    let mystyle = "experience-item-bottom";
    
    if(data.index%3==0)
        mystyle = "experience-item-top";
    else if(data.index%3==1)
        mystyle = "experience-item-center";

    return (

    <div className={mystyle}>
        <div className="experience-item__details" >
            <p className="experience-item__details--title">Job at {data.company}</p>
            <ul className="experience-item__details--list">
                <li>Company:{data.company}</li>
                <li>StartDate:{data.startDate}</li>
                <li>EndDate:{data.endDate}</li>
                <li>JobTitle:{data.jobTitle}</li>
            </ul>
            <p className="experience-item__details--description">JobDescription:{data.jobDescription}</p>
        </div>
    </div>
    );
};

export default ExperienceItem;