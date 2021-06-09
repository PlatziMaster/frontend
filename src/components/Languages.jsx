import React, { useContext }  from 'react';
import { dataContext } from '../containers/App';
import '../styles/components/Languages.styl'


const Languages = () => {

    const { languages } = useContext(dataContext);
    return(
        <>
            <h2 className="Languages-title"> Lenguajes </h2>
            <ul>
                {
                    languages ?
                    languages.map( 
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
        </>
    )

}

export default Languages;