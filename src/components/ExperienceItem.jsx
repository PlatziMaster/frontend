import React from 'react'

const ExperienceItem = ({startDate, endDate, company, jobTitle, jobDescription,url,image}) => {
    return (
        <>
            <div className="card border-info  mt-1">
                <div className="card-header bg-info">
                    {startDate} - {endDate}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={image} alt={company} />
                        </div>
                        <div className="col-md-8">
                            <h5 className="card-title">{company}</h5>
                            <h6 className="card-title">{jobTitle}</h6>
                            <p className="card-text">
                                {jobDescription}<br/>
                                <a href={url}>{url}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default ExperienceItem
