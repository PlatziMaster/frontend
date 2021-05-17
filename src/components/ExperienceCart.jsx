import React from 'react'
import '../styles/components/experience_cart.css'

export const ExperienceCart = ({Job,Company,Description,StartDay,EndDay}) => {
    return (
        <div className="cart_container">
            <h5 className="cart_title">{Job}</h5>
            <h5>{Company}</h5>
            <p>{Description}</p>
            <p>{StartDay} - {EndDay}</p>
        </div>
    )
}
