import React from 'react'
import styled from 'styled-components'

const Interest = () => {
    return (
        <Container>
            <h2>Interest</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
            </ul>
            <ul>
                <li>Technology</li>
                <li>Apple</li>
                <li>Music</li>
            </ul>
        </Container>
    )
}

export default Interest

const Container = styled.div`

    grid-column: 11 / 17;
    grid-row: 5;
    display: flex;
    flex-direction: column;
    justify-content: ;
    align-items: flex-start;
    padding-left: 20%;

    ul {
        font-size: 0.9rem;
        color: #001D3D;
        font-weight: 400;
        font-size: 1rem;
        list-style: none;
        display: flex;
        justify-content: space-around;
    }
    li {
        padding-right: 20px;
    }

    h2 {
        color: white;
        letter-spacing: 3px;
    }
`
