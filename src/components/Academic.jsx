import React, { useContext }  from 'react';
import { dataContext } from '../containers/App';
import '../styles/components/Academic.styl'


const Academic = () => {
    
    const { Academic } = useContext(dataContext);




    return(
        <section>
            <h2 className="Academic-title"> Formación Académica </h2>
            <ul className="Academic-container">

                {
                    Academic ?
                        Academic.map( 
                            (   
                                {

                                    degree,
                                    description,
                                    endDate,
                                    institution,
                                    startDate

                                }, index ) => (

                                <li key={index}>

                                    <h3> { degree } </h3>
                                    <span> { startDate } - { endDate } </span>
                                    <h4> <span>Institución:</span> { institution } </h4>
                                    <p> { description } </p>

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

export default Academic;