import React from 'react';

const Tile = ({title, children, color, align})=>{
    return(
        <section className={`Tile Tile--${color} Profile-title Experience-title Academic-title Skills-title Interest-title Languages-title`}>
            <div className={`Tile__header Tile__header--${align}`}>{title}</div>
            {children}
        </section>
    )
}

export default Tile