import React from "react"
import Section from "../components/Section"

import "../styles/pages/Additional.css"

const Additional = ({ data }) => (
    <React.Fragment>
        <h2 className="additional__main-title">{data.title}</h2>

        {data.content.map(section => (
            <Section title={section.contentTitle} key={data.id}>
                <ul>
                    {section.contentContent.map(item => (
                        <li key={item.id}>
                            {item.content}
                        </li>
                    ))}
                </ul>
            </Section>
        ))}
    </React.Fragment>
)

export default Additional