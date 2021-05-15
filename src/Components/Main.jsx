import React from 'react'
import styled from 'styled-components'
import Profile from '../Components/Profile'
import Experience from '../Components/Experience'
import Courses from '../Components/Courses'
import Languages from '../Components/Languages'
import Skills from '../Components/Skills'
import Interest from '../Components/Interest'

const Main = () => {
    return (
        <Container>
            <Profile />
            <Experience />
            <Courses />
            <Languages />
            <Skills />
            <Interest />
        </Container>
    )
}

export default Main

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(16,1fr);
    grid-template-rows: repeat(8,1fr);
    height: 100vh;
`