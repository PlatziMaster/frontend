import React from 'react'

export default function Academic({academic, certificate}) {
    return (
        <section className="Academic">
            <h2 className="Academic-title">Academic</h2>
            {
                academic.map((item, index) => (
                    <div className="Academic-item" key={index}>
                        <h3>{item.institution}</h3>
                        <h4>{item.degree}</h4>
                        <p>{`${item.startDate} - ${item.endDate}`}</p>
                        <p>{item.description}</p>
                    </div>
                ))
            }
            <h2>Certificates</h2>
            {
                certificate.map((item, index) => (
                    <div className="Academic-item" key={index}>
                        <h3>{item.institution}</h3>
                        <h4>{item.name}</h4>
                        <p>{item.date}</p>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </section>
    )
}
