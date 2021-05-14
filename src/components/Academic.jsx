import React from 'react';

const Academic = ({data = []}) => {

    const list = data.map(item => (
        <div className = "Academic-container" key={item.institution}>
            <h2 className ="Academic-institution">- {item.institution}</h2>
            <h3>{`${item.degree} from ${item.startDate} to ${item.endDate}`}</h3>
            <p className='Academic-item'>{item.description}</p>
        </div>
    ))

    return(
        <div className = "Card">
            <h1 className='Academic-title'>Academic</h1>
            {data.length ? list : <p>No data</p>}
        </div>
    );
}

export default Academic