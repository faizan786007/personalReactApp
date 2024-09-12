import React from "react";
import "../MovieCard.css";

const MovieCC = ({ movie, addStar, decStar, toggle, cartbtn }) => {
	// Destructure the properties from movie object
	const { price, title, plot, rating, star, fav, src, cart } = movie;

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
								alt="decrease star"
								onClick={() => decStar(movie)}
							/>
							<img
								className="star-disc"
								src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
								alt="star"
							/>
							<img
								className="plus"
								src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
								alt="increase star"
								onClick={() => addStar(movie)}
							/>
							<span>{star}</span>
						</div>

						<button
							onClick={() => toggle(movie)}
							className={fav ? "fav-btn" : "unfav-btn"}
						>
							{fav ? "Favourite" : "Un-favourite"}
						</button>

						<button
							onClick={() => cartbtn(movie)}
							className={!cart ? "cart-btn" : "uncart-btn"}
						>
							{!cart ? "Add Cart" : "Remove  Cart"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCC;
