import React from 'react';
import { Card, Button } from "react-bootstrap";

const ShopCard = (props) => {
    const { card, isSelected, onClick } = props;

    const addItem = () => {
        props.getItem(props.card);
        console.log(props.card);
    }

    const removeItem = () => {
        props.removeItem(props.card);
        console.log(props.card);
    }

    return (
        <div className={`mt-3 col-12 col-sm-6 col-md-4 col-xl-3 ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <Card style={isSelected ? { backgroundColor: '#f8d7da', borderColor: '#212F3C' } : {}}>
                <Card.Img variant="top" src={"/assets/" + card.imgUrl} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.price} UAH.</Card.Text>
                    {isSelected && <div className="selected-indicator">About this book</div>}
                    <Button variant="success" onClick={addItem}>I want to buy it!</Button>
                    <Button variant="danger" onClick={removeItem}>-</Button>
                    <span> Selected {card.added}</span>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShopCard;
