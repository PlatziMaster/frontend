import React from 'react'

const Academic = ({title, academic}) => {
    // console.log(academic)
    return (
        <>
            <div className="card mt-1">
                <div className="card-header bg-info text-white">
                    {title}
                </div>
                <div className="card-body">                    
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">Academic degree</p>
                    {academic.map((acad,index)=>(
                        <div key={index}>
                            <hr />                                
                            <h5 className="card-title">{acad.degree} | <small className="text-secondary">{acad.institution}</small></h5>
                            <p className="card-text">
                                {acad.description}                                
                            </p>
                            <p className="text-end">
                                <small className="text-secondary">{acad.startDate} - {acad.endDate}</small>
                            </p>
                        </div>
                    ))}

                </div>
            </div>            
        </>
    )
}

export default Academic
