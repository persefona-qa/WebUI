import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const ShopCard = (props) => {
	const { card, isSelected, onClick } = props;

		return (
			<div
				className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}
				style={isSelected ? { backgroundColor: '#f8d7da', borderColor: '#212F3C' } : {}}
			>
				<img src={card.image} className="card-img-top" alt={card.title} />

				<div className="card-body">
					<h5 className="card-title">{card.title}</h5>
					<p className="card-text">{card.description}</p>
					{isSelected && <div className="selected-indicator">About this book</div>}
					<Button variant="success" onClick={onClick}>I want to buy it!</Button>
				</div>
			</div>
		);
	}

	export default ShopCard;