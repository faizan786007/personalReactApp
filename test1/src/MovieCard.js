import React, { Component } from "react";
import "./MovieCard.css";

export default class MovieCard extends Component {
	constructor() {
		super();
		this.state = {
			price: 199,
			plot: "Movie is about super hero",
			title: "Avengers",
			rating: 8.9,
			star: 0,
			fav: true,
		};
	}
	addStar = () => {
		// this.setState({
		// 	star: this.state.star + 0.5,
		// });
		if (this.state.star >= 10) return;
		this.setState((ps) => {
			return {
				star: ps.star + 0.5,
			};
		});
	};
	decStar = () => {
		if (this.state.star <= 0) return;
		this.setState({
			star: this.state.star - 0.5,
		});
	};
	toggle = () => {
		this.setState({
			fav: !this.state.fav,
		});
	};
	render() {
		const { price, title, plot, rating, star, fav } = this.state;
		return (
			<div className="main">
				<div className="card">
					<div className="left">
						<img
							src="https://w0.peakpx.com/wallpaper/551/479/HD-wallpaper-avengers-poster-avengers-poster-marvels-super-hero-superhero-the-avengers.jpg"
							alt="img"
						/>
					</div>
					<div className="right">
						<div className="title">{title}</div>
						<div className="plot">{plot}</div>
						<div className="price">RS.{price}</div>

						<div className="footer">
							<div className="rating">{rating}</div>
							<div className="star">
								<img
									className="minus"
									src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
									alt=""
									onClick={this.decStar}
								/>
								<img
									className="star-disc"
									src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
									alt=""
								/>
								<img
									className="plus"
									src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
									alt=""
									onClick={this.addStar}
								/>
								<span>{star}</span>
							</div>
							{
								<button
									onClick={this.toggle}
									className={fav ? "fav-btn" : "unfav-btn"}
								>
									{fav ? "favourite" : "un-favourite"}
								</button>
							}

							<button className="cart-btn">Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
