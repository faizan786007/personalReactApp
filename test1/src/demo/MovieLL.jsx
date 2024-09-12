import React, { useState } from "react";
// import MovieCard from "./MovieCard";
import MovieCC from "./MovieCC";
import { movies as moviesData } from "./data";

const MovieLL = () => {
	// Initializing the state with useState hook
	const [movies, setMovies] = useState(moviesData);

	// Function to handle star increment
	const handleAddStar = (movie) => {
		const updatedMovies = movies.map((m) =>
			m === movie && m.star < 10 ? { ...m, star: m.star + 1 } : m
		);
		setMovies(updatedMovies);
	};

	// Function to handle star decrement
	const handleDecStar = (movie) => {
		const updatedMovies = movies.map((m, index) => {
			if (m === movie && m.star > 0) {
				return { ...m, star: m.star - 1 };
			} else return m;
		});
		setMovies(updatedMovies);
		// const index = movies.indexOf(movie);
		// const updatedMovies = [...movies];
		// console.log("um", updatedMovies);
		// console.log(index);
		// if (updatedMovies[index].star <= 0) return;
		// updatedMovies[index].star -= 1;
		// setMovies(updatedMovies);
		// const updatedMovies = movies.map((m) =>
		// 	m === movie && m.star > 0 ? { ...m, star: m.star - 0.5 } : m
		// );
		// setMovies(updatedMovies);
	};

	// Function to toggle the favorite status
	const handleToggle = (movie) => {
		const updatedMovies = movies.map((m) =>
			m === movie ? { ...m, fav: !m.fav } : m
		);
		setMovies(updatedMovies);
	};
	const handleCart = (movie) => {
		const um = movies.map((m, index) =>
			m == movie ? { ...m, cart: !m.cart } : m
		);
		setMovies(um);
	};

	// Render movies
	return (
		<div>
			{movies.map((movie, index) => (
				<MovieCC
					key={index}
					movie={movie}
					addStar={handleAddStar}
					decStar={handleDecStar}
					toggle={handleToggle}
					cartbtn={handleCart}
				/>
			))}
		</div>
	);
};

export default MovieLL;
