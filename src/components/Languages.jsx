import React from 'react'
import '../styles/components/Languages.css'

const Languages =({children})=>{
    return(
        <section className="main_languages-container">
                <h2 className='Languages-title'>Languages</h2>
                <div className="main_languages-table">
                    <table>
                        <tbody>
                        {children}
                        </tbody>
                    </table>
                </div>
            </section>
    )
}

export default Languages