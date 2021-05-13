import React from 'react';
import Tile from './Tile';

const Interest = ()=>{
    return(
        <Tile
            title="Interest"
            color="yellow"
            align="left"
        >
        <ul className="Interest__body">
            {
                <span className="Interest__item">Javascript</span>
            }
        </ul>

        </Tile>
    )
}

export default Interest;