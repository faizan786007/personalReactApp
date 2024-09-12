import React from "react";
import { Link } from "react-router-dom";
import "../pages/Navbar.css";

const About = () => {
	return (
		<div className="about">
			About
			<Link to="/">back to home</Link>
		</div>
	);
};

export default About;
