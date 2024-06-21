// ShopCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShopCard = ({ card, getItem, removeItem }) => {
    const addItem = () => {
        getItem(card);
    };

    const handleRemove = () => {
        removeItem(card);
    };

    return (
        <div className="mt-3 col-12 col-lg-3">
            <Card>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Card.Text>{card.price} UAH.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={addItem}>Add to Cart</Button>
                    <Button variant="danger" onClick={handleRemove}>Remove</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ShopCard;
