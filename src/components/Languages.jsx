import React, { useContext }  from "react";
import DataContext from "../context/DataContext";
import '../styles/components/Lenguages.styl'



const Languages = () => {
    const {data} = useContext(DataContext);
    return (
        <div className="container-lenguages" >
            <h2>Lenguages</h2>
        <div className="lenguages">
         {
            data.languages.map(item=>(
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

export default Languages;