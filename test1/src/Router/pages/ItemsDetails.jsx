import React from "react";
import "../pages/Navbar.css";
import { ITEMS } from "../Data/ItemsData";
import { Link, useParams } from "react-router-dom";

const ItemsDetails = () => {
	const { id } = useParams();
	const item = ITEMS.find((item) => item.id == id);
	console.log(item, "item");
	return (
		<div className="items-details">
			<h2> ItemsDetails</h2>

			{id ? <p>items-id is {id}</p> : <p>item id not present</p>}
			<h2>{item.title}</h2>
			<h2>{item.detail}</h2>
			<Link to="/items">back to Items</Link>
		</div>
	);
};

export default ItemsDetails;
