import React from 'react';
import '../styles/components/Profile.css';

const About = ({ profileDesc }) => (
	<div className="profile">
		<h3>Profile:</h3>
		<p>{profileDesc}</p>
	</div>
);
export default About;