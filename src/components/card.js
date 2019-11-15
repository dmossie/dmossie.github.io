import React from 'react';
import Card from "react-bootstrap/Card";
import Images from "../data/images";

const PortfolioCard = (props) => {
    return (
        <Card className="portfolio-card">
            <div className="card-image-holder">
                <Card.Img className="portfolio-card-image" variant="top" src={ Images[props.image] } />
            </div>
            <hr className="portfolio-divider"/>
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