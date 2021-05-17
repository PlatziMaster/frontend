import React from 'react'

export default function Interest({interest}) {
    return (
        <section className="Interest">
            <h2 className="Interest-title">Interest</h2>
            {
                interest.map((item, index) => (
                    <p className="Interest-item" key={index}>{item}</p>
                ))
            }
        </section>
    )
}
