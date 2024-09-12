import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const Reset = () => {
	const { email, setEmail } = useLocalStorage();
	// const [email, setEmail] = useState("");
	// useEffect(() => {
	// 	let email = localStorage.getItem("email");
	// 	if (email) setEmail(email);
	// }, []);
	// useEffect(() => {
	// 	localStorage.setItem("email", email);
	// }, [email]);
	return (
		<div>
			<label>Email</label>
			<br />
			<input
				type="email"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>{" "}
			<br />
			<button>continue</button>
		</div>
	);
};

export default Reset;
