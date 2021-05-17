import React from 'react'

export default function Languages({languages}) {
    return (
        <section className="Languages">
            <h2 className="Languages-title">Languages</h2>
            {
                languages.map((item, index) => (
                    <div className="Languages-item" key={index}>
                        <h4>{item.name}</h4>
                        <p>{item.percentage}</p>
                    </div>
                ))
            }
        </section>
    )
}
