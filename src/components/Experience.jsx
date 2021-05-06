import React from 'react'
import '../styles/components/Experience.css'

const Experience = ({children}) => {
    return(
        <section className='main_experience-containter'>
            <h2 className='Experience-title'>Experience</h2>
            <div className='table-experience-containter'>
                <table>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Experience