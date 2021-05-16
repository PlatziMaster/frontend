import React from 'react'
import '../styles/components/Experience.css'

const Experience = ({ children }) => {
    // console.log(experience)
    return (
    <div className="Experience">
        <h1 className="Experience-title">Experience</h1>
        <div className="Experience-container">
         {children}
        </div>
        
    </div>
    )
}


export default Experience


