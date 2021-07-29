import React from 'react';

const Languages = ({ languages } ) => {

    return (
        <section className="Languages">
            <h1 className="Languages-title">Languages</h1>
            <ul className="Languages-itemContainer">
                {languages ?
                    languages.map((item, index) => (
                        <li className="Languages-item" key={index.toString()}>
                            <h2>{item.name} ({item.percentage})</h2>
                            <div className="Languages-percentage">
                                <div style={{width: item.percentage}}></div>
                            </div>
                        </li>
                    )) :
                    <div>Cargando</div>

                }
            </ul>

        </section>
    )
}


export default Languages