import React from 'react'
import '../styles/components/Languages.css'

const Languages = ({ languages }) => {
    return (
    <div className="Languages">
        <h1 className="Languages-title">Lenguage</h1>
        <div className="Languages-container">
        { languages ?
            languages.map((language,index) =>{
                return(
                    <div key={index} className="Languages-item">
                        <p>{language.name} {language.percentage}</p>
                        <div className="percentage">
                            <div className="percentage-bar"></div>
                        </div>
                    </div>
                )
            }) :
            <h1>cargando....</h1>

        }
        </div>
    </div>
    )
}


export default Languages