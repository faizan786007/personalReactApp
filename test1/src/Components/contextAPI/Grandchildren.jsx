import React from "react";
import { useContext } from "react";
import { colorContext } from "./Context";

const Grandchildren = () => {
	// console.log("gc", props);

	// const { color } = props;
	const { color, setColor } = useContext(colorContext);
	console.log("color", color);
	return (
		<div>
			<p style={{ color: color }}>Color code: {color}</p>
			<input type="color" onChange={(e) => setColor(e.target.value)} />
		</div>
	);
};

export default Grandchildren;
