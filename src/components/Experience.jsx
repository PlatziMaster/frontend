import React from "react";

export default function Experience({ experience }) {
    return (
        <div className="experience content">
            <h2 className="Experience-title title">Experience</h2>
            <div className="experience-container content">
                {experience?.map((item) => (
                    <div className="Experience-item">
                        <h3 className="experience-job-title">{item.jobTitle}</h3>
                        <p className="experience-location">{item.company}</p>
                        <p>{item.jobDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}