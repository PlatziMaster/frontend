import React from 'react'
import '../styles/components/Interest.css'
const Interest = ({children}) =>{
    return(
        <section className="main_interest-conainer">
                <h2 className='Interest-title'>Interest</h2>
                <div className="interest-conainer_2">
                    {children}
                </div>
        </section>
    )
}

export default Interest