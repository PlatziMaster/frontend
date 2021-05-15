import React from 'react'
import ItemSkill from '../Components/ItemSkill'
import styled from 'styled-components'

const Skills = () => {
    return (
        <Container>
            <h2>Skills</h2>
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
            <ItemSkill />
        </Container>
    )
}

export default Skills

const Container = styled.div`

    grid-column: 11 / 17;
    grid-row: 1 / 9;
    background-color: #FFD60A;
    display: flex;
    flex-direction: column;
    justify-content: ;
    align-items: flex-start;
    padding-left: 20%;

    h2 {
        color: white;
        letter-spacing: 3px;
        padding-top: 5%;
    }
    
`