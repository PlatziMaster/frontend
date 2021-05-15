import React, { Component } from 'react'

import './styles/Contact.styl'

class Contact extends Component {
    render(){
        console.log(this.props.data)
        return(
            <div className="contact__container">
                <h4 className="title">Contáctame en</h4>
                <div className="contact__info">
                    <p><strong>Teléfono:</strong> {}</p>
                    <p><strong>Ubicación:</strong> Zapopan, Jal.</p>
                    <p><strong>Correo:</strong><a href="mailto:brandargel@gmail.com"> brandargel@gmail.com</a></p>
                    <p><strong>Sitio:</strong><a href="https://brandonargel.github.io/"> brandonargel.github.io</a></p>
                    <p><strong>Linkedin:</strong><a href="https://www.linkedin.com/in/brandargel/"> @brandargel</a></p>
                </div>
            </div>
        )
    }
}

export default Contact