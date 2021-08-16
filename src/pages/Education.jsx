import React from "react"
import Section from "../components/Section"

const Education = ({ data }) => (
    <Section title={data.title}>
        <ul>
            {data.content.map(item => (
                <li key={item.id}>
                    {item.content}
                </li>
            ))}
        </ul>
    </Section>
)

export default Education