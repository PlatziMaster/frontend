import React from 'react';
import '../styles/components/Experience.css';

import Tile from './Tile';
import SubTile from './SubTile';

const Experience = ({experience})=>{
    return(
        <Tile
        title="Experience"
        color="yellow"
        align="right"
        >
            <ul className="Experience__body ">
                {
                    experience.map( job =>{
                        return <SubTile
                            key={job.startDate}
                            color="white"
                            company={job.company}
                            jobTitle={job.jobTitle}
                            startDate={job.startDate}
                            endDate={job.endDate}
                            jobDescription={job.jobDescription}
                        />
                    })
                }
            </ul>
        </Tile>
    )
}

export default Experience;