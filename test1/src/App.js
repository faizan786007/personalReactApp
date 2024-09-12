import React, { useState } from "react";
// import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import MovieLL from "./demo/MovieLL";
// import Mc from "./demo2/Mc";
// import ComponentA from "./Components/ComponentA";
import Blog from "./Components/Blog";
import Parent from "./Components/contextAPI/Parent";
import Login from "./Components/Localstorage/Login";
import Reset from "./Components/Localstorage/Reset";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Router/pages/Home";
import About from "./Router/pages/About";
import Items from "./Router/pages/Items";
import Navbar from "./Router/pages/Navbar";
import ItemsDetails from "./Router/pages/ItemsDetails";
import ErrorPage from "./Router/pages/ErrorPage";

const App = () => {
	// const [form, setForm] = useState("login");
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navbar />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "about", element: <About /> },
				{ path: "items", element: <Items /> },
				// { path: "items/:id", element: <ItemsDetails /> },
				{
					path: "items",
					children: [
						{ index: true, element: <Items /> },
						{ path: ":id", element: <ItemsDetails /> },
					],
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router}></RouterProvider>

			{/* {form === "login" ? <Login /> : <Reset />}
			<button onClick={() => setForm(form === "login" ? "reset" : "login")}>
				{form === "login" ? "forget password" : "back to login"}
			</button> */}

			{/* <Mc /> */}
			{/* <MovieList /> */}
			{/* <MovieLL /> */}

			{/* <ComponentA /> */}
			{/* <Blog /> */}
			{/* <Parent /> */}
		</div>
	);
};

export default App;
