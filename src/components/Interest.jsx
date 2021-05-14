import React from 'react';
import Tile from './Tile';

import '../styles/components/Interest.css';

const Interest = ({interest})=>{
    return(
        <Tile
            title="Interest"
            color="yellow"
            align="left"
        >
            <ul className="Interest__body">
                {interest.map(item =>{
                    return <li key={item} className="Interest__item Interest-item">{item}</li>
                })}
            </ul>

        </Tile>
    )
}

export default Interest;