import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate(-2), 3000);
	}, []);
	return (
		<div>
			<h1>Error page</h1>
		</div>
	);
};

export default ErrorPage;
