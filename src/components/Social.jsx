import React from 'react';

const Social = ({ social }) => {
    return (
        <ul>
            { social ?
                social.map((item, index) => (
                    <li className="About-socialItem" key={index.toString()}>
                        <a href={item.url}>
                            <div></div>
                        </a>
                    </li> )) :
                    <div>Cargando</div>
            }
        </ul>   
    )
}


export default Social