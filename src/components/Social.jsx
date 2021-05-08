import React from 'react'

const Social = (props) =>{
    return(
        <li>
            <a className='header_icon header_icon-web Header-website' href={props.website}>
                <img src={props.webicon} alt="Web Icon"/>
                <span>{props.social}</span>
            </a>
        </li>
    )
}

export default Social