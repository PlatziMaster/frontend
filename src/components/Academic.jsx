import React from 'react'
import '../styles/components/Academic.css'

const Academic = ({children}) =>{
    return(
        <section className="main_academic-container">
                <h2 className='Academic-title'>Education</h2>
                <div className="main_academic-title-container">
                    <table>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
        </section>
    )
}

export default Academic