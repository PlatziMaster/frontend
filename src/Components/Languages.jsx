import React from 'react'
import styled from 'styled-components'

const Languages = () => {
    return (
        <Container>
            <h2>Languages</h2>
            <div className="languages__level">
                <div className="languages">
                    <h3>English</h3>
                    <p>Level B2</p>
                </div>
                <div className="languagues">
                    <h3>Spanish</h3>
                    <p>Native</p>
                </div>
            </div>
        </Container>
    )
}

export default Languages

const Container = styled.div`

    grid-column: 7 / 12;
    grid-row: 5;
    display: flex;
    flex-direction: column;
    margin-top: 10%;

    h2 {
        color: #001D3D;
        letter-spacing: 3px;
    }
    p {
        color: #9F9494;
        font-weight: 400;
        font-size: 1.2rem;
    }

    .languages__level {
        display: flex;
        justify-content: space-between;
        width: 50%;
        align-items: center;
    }
    .languages {
        font-size: 0.9rem;
    }

`