import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import '../styles/components/Skills.styl';

const Skills = () => {
    const { data } = useContext(DataContext);
    return (
        <div>
            <h2>Skills</h2>
            <div className="skills">
                {
                    data.skills.map(item => (
                        <div key={item.name}>
                            <h4>{item.name}</h4>
                            <p>{item.percentage}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Skills;