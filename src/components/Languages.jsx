import React from 'react'
import '../styles/components/Languages.css'

const Languages = (props) => {
    return (
    <div className="Languages">
        <h1>Lenguage-title</h1>
        { props.languages ?
            props.languages.map((language,index) =>{
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
    )
}


export default Languages