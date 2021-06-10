import React, { useContext }  from 'react';
import { dataContext } from '../containers/App';
import '../styles/components/Experience.styl'


const Experience = () => {
    
    const { experience } = useContext(dataContext);




    return(
        <>
            <section className="Experience-container">

                <h2 className="Experience-title"> Experiencia desde el 2009 </h2>
                <ul className="Experience-list">

                    {
                        experience ?
                            experience.map( 
                                (   
                                    { company, 
                                    endDate, 
                                    jobDescription, 
                                    jobTitle, 
                                    startDate }, index ) => (

                                    <li key={index}>
                                        <h3> { company } </h3>
                                        <span className="startDate"> 🕘 { startDate } - </span>
                                        <span className="endDate">  { endDate } </span>
                                        <p className="jobDescription"> { jobDescription } </p>
                                        <span className="jobTitle"> { jobTitle } </span>
                                    </li>
                                )
                            )
                        :
                            <h3> Cargando </h3>
                        
                    }
                </ul>

            </section>
        </>
    )

}

export default Experience;