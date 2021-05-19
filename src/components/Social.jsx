import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGitSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const Social = ({social}) => {

    const {name, url} = social;
    
    return (
        <div className="social">
            <a target="__blank" href={url}>{name}</a>
        </div>
    );
}

export default Social;
