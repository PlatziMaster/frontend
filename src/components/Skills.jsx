import React from 'react'
import '../styles/components/Skills.css'
const Skills = ({children}) =>{
    return (
        <section className="main_skill-container">
                <h2 className='Skills-title'>Skill</h2>
                <div className="main_skill-list-container">
                    <table>
                        <tbody>
                        {children}
                        </tbody>
                    </table>
                </div>
            </section>
    )
}

export default Skills