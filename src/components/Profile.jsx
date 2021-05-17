import React from 'react'

export default function Profile({description}) {
    return (
        <section className="Profile">
            <h2 className="Profile-title">Abstract</h2>
            <p className="Profile-desc">{description}</p>
        </section>
    )
}

