import React  from "react";
import Academic from "./Academic";
import Languages from "./Languages";
import Skills from "./Skills";
import '../styles/components/Abilities.styl';

const Abilities = () => {
    return (
            <div className="abilities-container">
                <Academic/>
                <Skills/>
                <Languages/>
            </div>
    )
}

export default Abilities;