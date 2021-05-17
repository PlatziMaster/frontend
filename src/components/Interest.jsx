import React from 'react'

const Interest = ({title, interest}) => {
    return (
        <>
            <div className="card mt-1">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {interest.map((inte, index)=>(                                                    
                             <li className="list-group-item text-capitalize" key={index}>{inte}</li>                                               
                        ))}     
                    </ul>                 
                </div>
            </div>            
        </>
    )
}

export default Interest
