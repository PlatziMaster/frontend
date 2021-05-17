import React from 'react';

const Languajes = ({title,languages}) => {
    return (
        <>
            <div className="card mt-1">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    {languages.map((lan, index)=>(
                        <div className="mt-2" key={index}>
                            <h5 className="card-title">{lan.name}</h5>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{width:lan.percentage}} aria-valuenow={lan.percentage} aria-valuemin="0" aria-valuemax="100">{lan.percentage}</div>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>            
        </>
    )
}

export default Languajes
