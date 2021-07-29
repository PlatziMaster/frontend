import React from 'react';

const Interest = ( { interest } ) => {
    return (
        <section className="Interest">
            <h1 className="Interest-title">Interest</h1>
            <ul className="Interest-itemContainer">
                {interest ?
                    interest.map((item, index) => (
                        <li className="Interest-item" key={index.toString()}> <h2>{item}</h2> </li>
                    )) : 
                    <div>Cargando</div>
                }
            </ul>
        </section>
    )
}

export default Interest