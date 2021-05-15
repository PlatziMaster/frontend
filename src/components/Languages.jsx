import React from 'react';
import '../styles/components/Languages.css';

const Languages = ({ languages }) => (
	<div className="skills">
		<h4>Languages:</h4>
        <div>
        {languages.map(item =>{
            return (
                <div className="languages-list">
                    <ol>
                        <ul><span>{item.name}:</span> {item.percentage}</ul>
                    </ol>
                </div>
            );
        })};
        </div>
	</div>
);
export default Languages;