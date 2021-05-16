import React from 'react'
import '../styles/components/Experience.css'

const Experience = ({children, experience}) => {
    // console.log(experience)
    return (
    <div className="Experience">
        <h1>Experience</h1>
        <div className="Experience-Container">
         {children}
        </div>
        
    </div>
    )
}


export default Experience


