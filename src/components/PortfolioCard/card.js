import React from 'react';
import Card from "react-bootstrap/Card";
import Images from "../../data/images";

import './card.css'

const PortfolioCard = (props) => {
    return (
        <Card className="portfolio-card mx-auto">
            <div className="card-image-holder">
                <Card.Img className="portfolio-card-image" variant="top" src={ Images[props.image] } />
            </div>
            <hr className="portfolio-divider"/>
            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Subtitle>{ props.title }</Card.Subtitle>
                <Card.Subtitle>{ props.duration }</Card.Subtitle>
                <Card.Text>
                    { props.description }
                </Card.Text>
                { props.link && <Card.Link target="__blank" href={ props.link }>Link</Card.Link> }
            </Card.Body>
        </Card>
    )
};

export default PortfolioCard;