import React from 'react';

export default function Academic({academic}) {
    return (
        <div className="academic content">
            <h2 className="Academic-title title">Academic</h2>
            <div className='content'>
                {academic?.map((item) => (
                    <div className="Academic-item">
                        <h3 className="academic-title">{item.degree}</h3>
                        <p className="academic-location">
                            {item.institution}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}