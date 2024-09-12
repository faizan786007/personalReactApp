import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "../pages/Navbar.css";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<h1>
					<NavLink
						to="/"
						style={({ isActive }) => {
							return {
								color: isActive ? "red" : "black",
							};
						}}
					>
						HOME
					</NavLink>
				</h1>
				<h1>
					<NavLink
						to="about"
						style={({ isActive }) => {
							return {
								color: isActive ? "red" : "black",
							};
						}}
					>
						{" "}
						ABOUT
					</NavLink>
				</h1>
				<h1>
					<NavLink
						to="items"
						style={({ isActive }) => {
							return {
								color: isActive ? "red" : "black",
							};
						}}
					>
						{" "}
						ITEMS
					</NavLink>
				</h1>
			</div>
			<Outlet />
		</>
	);
};

export default Navbar;
