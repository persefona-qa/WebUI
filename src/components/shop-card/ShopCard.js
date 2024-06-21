import React from 'react';
import { Card, Button } from "react-bootstrap";

const ShopCard = (props) => {
    const addItem = () => {
        props.getItem(props.card);
        console.log(props.card);
    }
    const removeItem = () => {
        props.removeItem(props.card);
        console.log(props.card);
    }
    return (
        <div className="mt-3 col-12 col-sm-6 col-md-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.image} />
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    <Card.Subtitle>{props.card.description}</Card.Subtitle>
                    <Card.Text>{props.card.price} UAH.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={addItem}>I want to buy it!</Button>
                    <Button variant="danger" onClick={removeItem}>-</Button>
                    <span> Selected {props.card.added}</span>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ShopCard;
