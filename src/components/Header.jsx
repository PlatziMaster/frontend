import React from 'react';


const Header = ({ children }) => {

    return (
        <section className="Header">
            <h1 className="Header-title">Curriculum Vitae</h1>
            <>
                {children}
            </>
        </section>
    )

}


export default Header