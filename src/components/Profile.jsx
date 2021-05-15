import React from 'react';
import '../styles/components/Profile.css';

const About = ({ profileDesc }) => (
	<div className="profile">
		<h3 className="Profile-title">Profile:</h3>
		<p className="Profile-desc">{profileDesc}</p>
	</div>
);
export default About;