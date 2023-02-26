import React from "react";

export default function Experience({ experience }) {
    return (
        <div className="experience content">
            <h2 className="Experience-title title">Experience</h2>
            <div className="experience-container content">
                {/* {experience?.map((item) => (
                    <div className="Experience-item">
                        <h3 className="experience-job-title">{item.jobTitle}</h3>
                        <p className="experience-location">{item.company}</p>
                        <p>{item.jobDescription}</p>
                    </div>
                ))} */}
                <div className="Experience-item">
                    <h3 className="experience-job-title">.NET developer</h3>
                    <p className="experience-location">GoDataFeed</p>
                    <p>
                        Design, develop, test, and maintain software solutions.
                        Write code, troubleshoot issues, collaborate with team members,
                        and stay up-to-date with emerging technologies.
                    </p>
                </div>
                <div className="Experience-item">
                    <h3 className="experience-job-title">.NET developer</h3>
                    <p className="experience-location">Comdata Group</p>
                    <p>
                        Design, develop, test, and maintain software solutions.
                        Write code, troubleshoot issues, collaborate with team members,
                        and stay up-to-date with emerging technologies.
                    </p>
                </div>
                <div className="Experience-item">
                    <h3 className="experience-job-title">Full Stack Developer</h3>
                    <p className="experience-location">Galaxy Temporal</p>
                    <p>
                        Design, develop, and maintain full-stack web applications.
                        Write clean code, troubleshoot issues, collaborate with team members,
                        and stay up-to-date with emerging technologies and industry trends.
                    </p>
                </div>
                <div className="Experience-item">
                    <h3 className="experience-job-title">Operations Supervisor</h3>
                    <p className="experience-location">Kiwibot Campus</p>
                    <p>
                        Make robot operation reports, verify performance, analyze delivery routes,
                        communicate with stakeholders, and provide feedback on robot improvements
                        to improve operational metrics.
                    </p>
                </div>
            </div>
        </div>
    );
}