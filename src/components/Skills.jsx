import React from "react";  

export default function Skills({skills}) {
    return (
        <div className="skills content">
            <h2 className="Skills-title title">Skills</h2>
            <div className="content">
                <ul className="multi-column-list">
                    {skills?.map((item) => (
                        <li className="Skills-item">{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}