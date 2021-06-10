import React, { useContext } from 'react';
import { dataContext } from '../containers/App'
import '../styles/components/About.styl'


const About = () => {

    const { 
        name, 
        profession,
        address,
        email,
        website,
        phone,
        avatar
    
    } = useContext(dataContext)
    

    return(
        <>
            <header className="Header-container">

                <figure className="Avatar">
                    <img src={ avatar } alt="" />
                </figure>
                <section className="Info-container">

                    <h1 className="Header-title"> { name } </h1>
                    <h3 className="Header-job-title"> { profession } </h3>

                    <ul className="Header-contact">

                        <li className="Header-phone"> 📱 Teléfono: { phone }  </li>
                        <li className="Header-email"> ✉️ | Correo: { email}  </li>
                        <li className="Header-website">🔗 | Sitio Web: { website } </li>
                        <li className="Header-address"> 🏠 | Dirección: { address } </li>

                    </ul>

                </section>

            </header>
        </>
    )

}

export default About;