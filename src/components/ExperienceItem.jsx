import React from 'react'
import '../styles/components/ExperienceItem.css'

const ExperienceItem = ({experience}) => {
    const array = experience
    console.log(array)
    return (
        <>
        <section className="Experience-Item">
            <p><strong>company:</strong>catstore</p>
            <p><strong>jobDescription:</strong>Meow in empty rooms lick left leg for ninety minutes, still dirty.</p>
            <p><strong>jobTitle:</strong>Backend</p>
            <p><strong>startDate:</strong>Sept 2019</p>
            <div className="container-father">
                <div className="box1">
                </div>
                <div className="box2">
                </div>
            </div>
        </section>        
        </>
    )
}


export default ExperienceItem
