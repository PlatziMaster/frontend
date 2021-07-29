import React from 'react';


const Academic = ({ academic, certificate }) => {
    console.log(certificate, academic)
    return (
        <section className="Academic">
            <h1 className="Academic-title">Academic</h1>
            <section className="Academic-itemContainer">
                {certificate ? 
                    certificate.map((item, index) => (
                        <article className="Academic-item--certificate" key={index.toString()}>
                            <p><span>Certificate:</span></p>
                            <p><span>Date:</span> {item.date}</p>
                            <p><span>Description:</span> {item.description}</p>
                            <p><span>Institution:</span> {item.institution}</p>
                            <p><span>Name:</span> {item.name}</p>
                        </article>
                    )) :
                    <div>Cargando</div>
                }
                {academic ?
                    academic.map((item, index) => (
                        <article className="Academic-item" key={index.toString()}>
                            <p><span>Academic:</span></p>
                            <p><span>Degree:</span> {item.degree}</p>
                            <p><span>Description:</span> {item.description}</p>
                            <p><span>EndDate:</span> {item.endDate}</p>
                            <p><span>Institution:</span> {item.institution}</p>
                            <p><span>StartDate:</span> {item.startDate}</p>
                        </article> 
                    )) : 
                    <div>Cargando</div>

                }
            </section>
        </section>
    )
}


export default Academic