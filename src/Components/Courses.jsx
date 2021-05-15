import React from 'react'
import styled from 'styled-components'

const Courses = () => {
    return (
        <Container>
            <h2>Courses</h2>
            <div>
                <h3>Platzi</h3>
                <ul>
                    <li>Curso Profesional de Git y GitHub</li>
                    <li>Curso de Sistemas de Diseño</li>
                    <li>Curso de Responsive Design</li>
                    <li>Curso de CSS Grid Layout</li>
                    <li>Curso Básico de JavaScript</li>
                    <li>Curso de Closure y Scope </li>
                </ul>
            </div>
        </Container>

    )
}

export default Courses

const Container = styled.div`
    grid-column: 7 / 10;
    grid-row: 2 / 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    ul {
        font-size: 0.9rem;
        color: #9F9494;
        font-weight: 400;
    }

    h2 {
        color: #001D3D;
        letter-spacing: 3px;
    }
    p {
        color: #9F9494;
        font-weight: 400;
        font-size: 1.2rem;
    }
`