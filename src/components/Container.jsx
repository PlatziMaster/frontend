import React from 'react'

const Container = ({title}) => {

    return (
        <>
            <div className="card mt-1">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
            </div>            
        </>
    )
}

export default Container
