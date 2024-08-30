import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
	render() {
		return (
			<div>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
		);
	}
}
