import React from 'react';


const Skills = ( { skills } ) => {
    return (
        <section className="Skills">
            <h1 className="Skills-title">Skills</h1>
            <ul className="Skills-itemContainer">
                {skills ?
                    skills.map((item, index) => (
                        <li className="Skills-item" key={index.toString()}>
                            <h2>{item.name} ({item.percentage})</h2>
                            <div className="Skills-percentage">
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


export default Skills