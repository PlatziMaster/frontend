import React from 'react';

import Tile from './Tile';
import SubTileAcademic from './SubTileAcademic';

const Academic = ()=>{
    return(
        <Tile
        title="Academic"
        color="white"
        align="left"
        >
            <ul className="Academic__body">
                {
                    <SubTileAcademic
                    color="blue" 
                    degree="Technician Acountant"
                    description="I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms" 
                    endDate="Aug 2013"
                    institution="Jun 2016"
                    startDate="CBTis 32"
                    />
                }
            </ul>
        </Tile>
    )
}

export default Academic;