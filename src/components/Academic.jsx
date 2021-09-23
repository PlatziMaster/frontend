import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import '../styles/components/Academic.styl';

const Academic = () => {
    const {data} = useContext(DataContext)
    return (
        <div className="academic">
            <h2>Academic</h2>
        {
            data.Academic.map(item=>(
                <div key={item.degree}>
                    <h4>{item.degree}</h4>
                    <p>{item.description}</p>
                    <li>{item.endDate}</li>
                    <li>{item.institution}</li>
                    <li>{item.startDate}</li>
                </div>
            ))
        }
       </div>
    )
}
export default Academic;