import React from 'react'

export const AcademicCart = ({Degree,Description,Institution,StartDate,EndDate}) => {
    return (
        <div className="cart_container">
            <h5 className="cart_title">{Degree}</h5>
            <h5>{Institution}</h5>
            <p>{Description}</p>
            <p>{StartDate} - {EndDate}</p>
        </div>
    )
}
