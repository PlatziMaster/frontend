import React from 'react'
import '../styles/components/Interest.css'

const Interest = (props) => {
    return (
    <div className="Interest">
        <h1>Interest-title</h1>
        <ul>
            {props.interest ?
                props.interest.map((item, index) => {
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