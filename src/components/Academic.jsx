import React from 'react';
import '../styles/components/Academic.css'

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
                
                    <SubTileAcademic
                    color="blue" 
                    degree="Technician Acountant"
                    description="I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms" 
                    endDate="Aug 2013"
                    startDate="Jun 2016"
                    institution="CBTis 32"
                    />
                    <SubTileAcademic
                    color="blue" 
                    degree="Technician Acountant"
                    description="I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms" 
                    endDate="Aug 2013"
                    startDate="Jun 2016"
                    institution="CBTis 32"
                    />
                    <SubTileAcademic
                    color="blue" 
                    degree="Technician Acountant"
                    description="I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms" 
                    endDate="Aug 2013"
                    startDate="Jun 2016"
                    institution="CBTis 32"
                    />
            </ul>
        </Tile>
    )
}

export default Academic;