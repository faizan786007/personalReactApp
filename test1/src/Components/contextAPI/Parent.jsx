import React, { useState } from "react";
import Children from "./Children";
import { colorContext } from "./Context";

const Parent = () => {
	const [color, setColor] = useState("#000000");
	return (
		<div>
			<h1>set color</h1>
			<input
				type="color"
				onChange={(e) => setColor(e.target.value)}
				value={color}
			/>
			<colorContext.Provider value={{ color, setColor }}>
				<Children />
			</colorContext.Provider>
		</div>
	);
};

export default Parent;
