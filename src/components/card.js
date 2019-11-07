import React from 'react';
import Card from "react-bootstrap/Card";
import Images from "../data/images";

const PortfolioCard = (props) => {
    return (
        <Card style={ { width: '18rem', height: '25rem' } }>
            <Card.Img style={ { maxWidth: '75%', height: 'auto' } } variant="top" src={ Images[props.image] } />
            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Text>
                    { props.description }
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default PortfolioCard;