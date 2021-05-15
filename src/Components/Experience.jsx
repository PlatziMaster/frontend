import React from 'react'
import styled from 'styled-components'

const Experience = () => {
    return (
        <Container>
            <h2>Experience</h2>
            {/* <div className="line initial-position">
             <div className="dot"></div>
            </div> */}
            <div className="text-content">
                <h3>Disney Clone - in progress</h3>
                <p>Building complete web app with the same design of Disney+ website</p>
            </div>
            {/* <div className="line middle-position">
                <div className="dot2"></div>
            </div> */}
            <div className="text-content2">
                <h3>Disney Clone - in progress</h3>
                <p>Building complete web app with the same design of Disney+ website</p>
            </div>
        </Container>
    )
}

export default Experience

const Container = styled.div`

    grid-column: 2 / 5;
    grid-row: 2 / 4;
    justify-self: ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

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