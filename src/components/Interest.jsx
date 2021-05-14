import React from 'react';
import Tile from './Tile';

import '../styles/components/Interest.css';

const Interest = ()=>{
    return(
        <Tile
            title="Interest"
            color="yellow"
            align="left"
        >
            <ul className="Interest__body">
                <li className="Interest__item Interest-item">Javascript</li>
                <li className="Interest__item Interest-item">Javascript</li>
                <li className="Interest__item Interest-item">Javascript</li>
            </ul>

        </Tile>
    )
}

export default Interest;