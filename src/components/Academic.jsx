import React from 'react'
import '../styles/components/Academic.css'

const Academic = ({children}) => {
    return (
    <div className="Academic">
        <h1>Academic-title</h1>
        {children}
    </div>
    )
}


export default Academic