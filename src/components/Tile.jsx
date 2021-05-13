import React from 'react';

const Tile = ({title, children, color, align})=>{
    return(
        <section className={`Tile Tile--${color}`}>
            <div className={`Tile__header Tile__header--${align}`}>{title}</div>
            {children}
        </section>
    )
}

export default Tile