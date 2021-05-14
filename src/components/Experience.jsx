import React from 'react';
import '../styles/components/Experience.css';

import Tile from './Tile';
import SubTile from './SubTile';

const Experience = ()=>{
    return(
        <Tile
        title="Experience"
        color="yellow"
        align="right"
        >
            <ul className="Experience__body ">
                    <SubTile
                    color="white"
                    company="domitai"
                    jobTitle="Blog Editor"
                    startDate="Oct 2018"
                    endDate="Sept 2020"
                    jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis voluptatibus in odio at quasi officia mollitia soluta, sed eum temporibus excepturi quas ipsa maxime atque rerum sint facilis illo."
                    />
                    <SubTile
                    color="white"
                    company="domitai"
                    jobTitle="Blog Editor"
                    startDate="Oct 2018"
                    endDate="Sept 2020"
                    jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis voluptatibus in odio at quasi officia mollitia soluta, sed eum temporibus excepturi quas ipsa maxime atque rerum sint facilis illo."
                    />
                    <SubTile
                    color="white"
                    company="domitai"
                    jobTitle="Blog Editor"
                    startDate="Oct 2018"
                    endDate="Sept 2020"
                    jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis voluptatibus in odio at quasi officia mollitia soluta, sed eum temporibus excepturi quas ipsa maxime atque rerum sint facilis illo."
                    />
            </ul>
        </Tile>
    )
}

export default Experience;