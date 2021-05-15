import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    return (
        <Container>
            <h2>Profile</h2>
            <p>Self-taught and creative UI Frontend Developer with 2 years of experience in building Front-end/UI-oriented Web applications creating re-usable components and completely responsive websites. Always looking for new technologies to be able to apply to the next challenges. Highly skillful in HTML, CSS, and JavaScript. Passionate about simplicity, successful designs, and good practices.</p>
        </Container>
    )
}

export default Profile

const Container = styled.div`

    grid-column: 2 / 11;
    grid-row: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

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