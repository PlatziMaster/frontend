import React from 'react'

export default function Skills({skills}) {
    return (
        <section className="Skills">
            <h2 className="Skills-title">Skills</h2>
            {
                skills.map((item, index) => (
                    <div className="Skills-item" key={index}>
                        <h4>{item.name}</h4>
                        <p>{item.percentage}</p>
                    </div>
                ))
            }
        </section>
    )
}
