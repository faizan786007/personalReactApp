import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			movies: [
				{
					price: 199,
					plot: "Movie is about super hero",
					title: "Avengers",
					rating: 8.9,
					star: 0,
					fav: true,
					src: "https://w0.peakpx.com/wallpaper/551/479/HD-wallpaper-avengers-poster-avengers-poster-marvels-super-hero-superhero-the-avengers.jpg",
				},
				{
					price: 299,
					plot: "Movie is about iron man hero",
					title: "Iron Man",
					rating: 8.0,
					star: 0,
					fav: true,
					src: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
				},
				{
					price: 399,
					plot: "Movie is about thor hero",
					title: "Thor",
					rating: 7.2,
					star: 0,
					fav: true,
					src: "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
				},
				{
					price: 109,
					plot: "Movie is about Batman hero",
					title: "Batman",
					rating: 9.2,
					star: 0,
					fav: true,
					src: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png",
				},
			],
		};
	}
	handleAddStar = (movie) => {
		const { movies } = this.state;
		const mId = movies.indexOf(movie);
		console.log("mid", mId);
		if (movies[mId].star >= 5) return;
		movies[mId].star += 0.5;

		this.setState({
			movies: movies,
		});
	};
	handleDecStar = (movie) => {
		const { movies } = this.state;
		const mId = movies.indexOf(movie);
		console.log("mid", mId);
		if (movies[mId].star <= 0) return;
		movies[mId].star -= 0.5;

		this.setState({
			movies: movies,
		});
	};
	handleToggle = (movie) => {
		const { movies } = this.state;
		let mId = movies.indexOf(movie);

		this.setState({
			movies: movies.map((m, index) =>
				index == mId ? { ...m, fav: !m.fav } : m
			),
		});
	};
	render() {
		const { movies } = this.state;
		return (
			<div>
				{/* <MovieCard movies={this.state} /> */}
				{movies.map((movie, index) => (
					<MovieCard
						key={index}
						movie={movie}
						addStar={this.handleAddStar}
						decStar={this.handleDecStar}
						toggle={this.handleToggle}
					/>
				))}
			</div>
		);
	}
}
