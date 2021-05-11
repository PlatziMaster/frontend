import React, { useEffect } from 'react';
import AppBar from '../Common/AppBar';
import About from '../About';

function Header(){

    return(
        <>
            <AppBar/>
            <About/>
        </>
    );
}

export default Header;