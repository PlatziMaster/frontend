import React from "react"
import "../styles/components/Section.css"

const Section = (props) => (
    <section className="section">
        <h2>{props.title}</h2>
        {props.children}
    </section>
)

export default Section