import React from 'react';
import '../styles/components/Academic.css';

const Academic = ({ academic }) => (
    <div className="academic">
        <h4 className="Academic-title">Academic</h4>
        <div>
            {academic.map(item => {
                return (
                    <div className="Academic-item">
                        <ol>
                            <ul><span>Degree:</span> {item.degree}</ul>
                            <ul><span>End date:</span> {item.endDate}</ul>
                            <ul><span>Institution:</span> {item.institution}</ul>
                            <ul><span>Start date:</span> {item.startDate}</ul>
                        </ol>
                    </div>
                );
            })};
        </div>
    </div>
);
export default Academic;