import React from 'react';
import './styles/style.css';


class Header extends React.Component {
    render() {
        return (
        <div className='header_container'>
            <div className="header_avatar">
                <div className="header_avatar__container">
                </div>
            </div>
            <div className="header_name">
                <div>
                    <h1>Don Alfredo Fuentes Araque</h1>
                    <h3>Ingeniero de Sistemas</h3> 
                </div>            
            </div>
            <div className="header_info">
                <div>
                        <h3>Información de Contacto:</h3>   
                        <ul className="header_info__contact">
                            <li>Cel 318328****</li>
                            <li>daf***@outlook.com</li>
                            <li>
                                <a href="https://www.linkedin.com/in/don-alfredo-fuentes-araque-04269812a/">www.don_fuentes.com</a>
                            </li>
                        </ul> 
                        <h3>Bucaramanga - Santander</h3>
                        <h3>Colombia</h3>
                </div>
                    
            </div>
        </div>
        )
    }
    
}

export default Header;