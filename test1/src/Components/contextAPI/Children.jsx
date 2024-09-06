import React from "react";
import Grandchildren from "./Grandchildren";

const Children = (props) => {
	// console.log("props", props);
	const { color } = props;
	console.log("color", color);
	return (
		<div>
			<Grandchildren color={color} />
		</div>
	);
};

export default Children;
