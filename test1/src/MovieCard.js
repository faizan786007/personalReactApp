import React, { Component } from "react";
import "./MovieCard.css";

export default class MovieCard extends Component {
	// addStar = () => {
	// 	// this.setState({
	// 	// 	star: this.state.star + 0.5,
	// 	// });
	// 	if (this.state.star >= 10) return;
	// 	this.setState((ps) => {
	// 		return {
	// 			star: ps.star + 0.5,
	// 		};
	// 	});
	// };
	// decStar = () => {
	// 	if (this.state.star <= 0) return;
	// 	this.setState({
	// 		star: this.state.star - 0.5,
	// 	});
	// };
	// toggle = () => {
	// 	this.setState({
	// 		fav: !this.state.fav,
	// 	});
	// };
	render() {
		// console.log(this.props.movies);
		const { movie, addStar, decStar, toggle } = this.props;
		// console.log(movie);
		// console.log(addStar);
		const { price, title, plot, rating, star, fav, src } = movie;
		return (
			<div className="main">
				<div className="card">
					<div className="left">
						<img src={src} alt="img" />
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
									onClick={() => decStar(movie)}
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
									onClick={() => addStar(movie)}
								/>
								<span>{star}</span>
							</div>
							{
								<button
									onClick={() => toggle(movie)}
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
