import React from 'react'
import styled from 'styled-components'
import About from '../Components/About'

const Header = (props) => {
    return (
        <Container>
           <About />
        </Container>
    )
}

export default Header


const Container = styled.div `
   background-color: #001D3D;
`
