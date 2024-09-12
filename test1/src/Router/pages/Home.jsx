import React from "react";
import "../pages/Navbar.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			Home <br />
			<Link to="/about">Login</Link>
			<br />
			<Link to="/items">Items</Link>
		</div>
	);
};

export default Home;
