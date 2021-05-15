import React from 'react';
import '../styles/components/Experience.css';

const Experience = ({ experience }) => (
	<div className="experience">
		<h4>Experience:</h4>
        {experience.map(item =>{
            return (
                <div className="experience-list">
                    <ol>
                        <ul><span>Company:</span> {item.company}</ul>
                        <ul><span>End date:</span> {item.endDate}</ul>
                        <ul><span>Position:</span> {item.jobTitle}</ul>
                        <ul><span>Start date:</span> {item.startDate}</ul>
                    </ol>
                    <p><span>Description: </span>{item.jobDescription}</p>
                </div>
            );
        })};
	</div>
);
export default Experience;