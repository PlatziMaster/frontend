import React from 'react'

const CertificateCart = ({Name,Institution,Date}) => {
    return (
        <div className="cart_container">
            <h5 className="cart_title">{Name}</h5>
            <h5>{Institution}</h5>
            <p>{Date}</p>
        </div>
    )
}

export default CertificateCart
