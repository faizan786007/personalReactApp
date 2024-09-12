import React from "react";
import "../pages/Navbar.css";
import { ITEMS } from "../Data/ItemsData";

import { Link } from "react-router-dom";

const Items = () => {
	return (
		<div className="items">
			Items
			<Link to="/">back to home</Link>
			<ul>
				{ITEMS.map((item, index) => (
					<li key={index}>
						<Link to={`/items/${item.id}`}>{item.id}</Link>
					</li>
				))}

				{/* <li>
					<Link to="/items/item1">Item1</Link>
				</li>
				<li>
					<Link to="/items/item2">Item2</Link>
				</li>
				<li>
					<Link to="/items/item3">Item3</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default Items;
