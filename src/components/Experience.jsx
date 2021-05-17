import React from 'react';

const Experience = ({data = []}) => {

    const list = data.map(item => (
        <div className="Experience-item" key={item.company}>
            <h2>{`- ${item.jobTitle} at ${item.company}`}</h2>
            <h3>{`From ${item.startDate} at ${item.endDate}`}</h3>
            <p>{item.jobDescription}</p>
        </div>
    ))

    return(
        <div className = "Card">
            
            <h1 className="Experience-title">Experience</h1>

            <div className="Container-experience">
                {data.length ? list : <p>No data</p>}
            </div>
        </div>
    );
}

export default Experience