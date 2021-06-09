import React from 'react';
import '../styles/components/Header.styl'
import About from './About'


const Header = (props) => {

    return(
        <>
            { props.children }
        </>
    )

}

export default Header;