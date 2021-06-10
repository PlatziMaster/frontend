import React, { useContext }  from 'react';
import { dataContext } from '../containers/App';
import '../styles/components/Skills.styl'


const Skills = () => {
    
    const { skills } = useContext(dataContext);




    return(
        <section>
            <h2 className="Skills-title"> Skills </h2>
            <ul className="Skills-container">

                {
                    skills ?
                        skills.map( 
                            (   
                                {
                                    name,
                                    percentage

                                }, index ) => (

                                <li key={index}>
                                    
                                    <h3> { name } </h3>
                                    <p> { percentage } </p>

                                </li>
                            )
                        )
                    :
                        <h3> Cargando </h3>
                    
                }
            </ul>
        </section>
    )

}

export default Skills;