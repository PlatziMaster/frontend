import React, { useContext }  from 'react';
import { dataContext } from '../containers/App';
import '../styles/components/Interest.styl'


const Interest = () => {

    const { interest } = useContext(dataContext);




    return(
        <section>
            <h2 className="Skills-title"> Intereses </h2>
            <ul className="Skills-container">

                {
                    interest ?
                        interest.map( 
                            (   
                                data , index ) => (

                                <li key={index}>
                                    
                                    <p> { data} </p>

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

export default Interest;