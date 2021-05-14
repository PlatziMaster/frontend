import React from 'react';
import '../styles/components/Academic.css'

import Tile from './Tile';
import SubTileAcademic from './SubTileAcademic';

const Academic = ({Academic})=>{
    return(
        <Tile
        title="Academic"
        color="white"
        align="left"
        >
            <ul className="Academic__body">
                {
                    Academic.map(item =>{
                        return<SubTileAcademic
                           key={item.startDate}
                           color="blue" 
                           degree={item.degree}
                           description={item.description}
                           endDate={item.endDate}
                           startDate={item.startDate}
                           institution={item.institution}
                        />
                   })
                }
            </ul>
        </Tile>
    )
}

export default Academic;