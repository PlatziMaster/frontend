import React from 'react'

const Skills = ({title,skills}) => {
    // console.log(skills)
    return (
        <>
            <div className="card mt-1">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    {skills.map((sk, index)=>(
                        <div className="mt-2" key={index}>
                            <h5 className="card-title">{sk.name}</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:sk.percentage}} aria-valuenow={sk.percentage} aria-valuemin="0" aria-valuemax="100">{sk.percentage}</div>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>            
        </>
    )
}

export default Skills
