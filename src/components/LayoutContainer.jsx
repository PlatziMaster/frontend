import React from 'react';
import '../styles/components/LayoutContainer.styl'


const LayoutContainer = ({ children }) => {

    return(
        <div className="LayoutContainer">
            { children }
        </div>
    )

}

export default LayoutContainer;