import React from 'react'
import '../styles/components/Interest.css'

const Interest = ({ interest }) => {
    return (
    <div className="Interest">
        <h1 className="Interest-title">Interest</h1>
        <ul className="Interest-container">
            {interest ?
                interest.map((item, index) => {
                    return(
                        <li key={index}>{item}</li>
                    )
                }) :
                <h1>cargando....</h1>
            }

        </ul>
    </div>
    )
}


export default Interest