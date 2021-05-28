import React from 'react'
import '../styles/components/Skills.css'

const Skills = ({ skills }) => {
  return (
    <section>
      <div className="">
        <h2 className="title-main">Skills</h2>
        <ul className="skills__content">
          {
            skills?.map(sk => (
              <li className="skill-item" key={sk.name}>
                <h3 className="title-skill-item" >{sk.name}</h3>
                <p className="p-1 sk-porcent" >{sk.percentage}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Skills