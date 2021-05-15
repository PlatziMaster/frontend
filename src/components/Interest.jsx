import React from 'react';
import '../styles/components/Interest.css';

const Interest = ({ interest }) => (
	<div className="interest">
		<h4>Interest:</h4>
        <div>
        {interest.map(item =>{
            return (
                <div className="interest-list">
                    <ol>
                        <ul><span>Skill:</span> {item}</ul>
                    </ol>
                </div>
            );
        })};
        </div>
	</div>
);
export default Interest;