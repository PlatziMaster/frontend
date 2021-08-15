import React from "react"
import Section from "../components/Section"

import "../styles/pages/Additional.css"

const Additional = () => (
    <React.Fragment>
        <h2 className="additional__main-title">Additional Information</h2>

        <Section title="Additional Skills">
            <ul>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
            </ul>
        </Section>

        <Section title="Learning new skills">
            <ul>
                <li>Economics</li>
                <li>Data bases</li>
                <li>Marketing (specifically SEO)</li>
            </ul>
        </Section>

        <Section title="Personal Information">
            <ul>
                <li>Age: 20</li>
                <li>Birthday: August 21th</li>
                <li>Location: Toluca, Mex</li>
            </ul>
        </Section>
    </React.Fragment>
)

export default Additional