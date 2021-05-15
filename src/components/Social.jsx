import React from 'react';
import '../styles/components/Social.css';

const Social = ({ social }) => (
	<div className="social">
		<h4>Social:</h4>
        <div>
        {social.map(item =>{
            return (
                <div className="social-list">
                    <ol>
                        <ul><span><b>{item.name}:</b></span> {item.url}</ul>
                    </ol>
                </div>
            );
        })};
        </div>
	</div>
);
export default Social;