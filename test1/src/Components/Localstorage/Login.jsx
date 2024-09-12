import React, { useState } from "react";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const Login = () => {
	// const [email, setEmail] = useState("");
	const { email, setEmail } = useLocalStorage();
	const [password, setPassword] = useState("");
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
			<label>Password</label>
			<br />
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>{" "}
			<br />
			<button>Login</button>
		</div>
	);
};

export default Login;
