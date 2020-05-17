import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Images from "../../data/images";

import './banner.css';

const Banner = (props) => {
    return (
        <Jumbotron className="portfolio-banner">
            <Row>
                <Col xs={ 12 } lg={ 3 }>
                    <Image
                        className="banner-image"
                        src={ Images[props.image] }
                    />
                </Col>
                <Col xs={ 12 } lg={ 3 }>
                    <h1>{ props.name }</h1>
                    <h4 className="banner-subtitle">{ props.title }</h4>
                    <h4 className="banner-subtitle">{ props.duration }</h4>
                </Col>
                <Col xs={ 12 } lg={ 4 }>
                    <p>{ props.description }</p>
                    <p>
                        <a href={ props.link } target="__blank">
                            Link
                        </a>
                    </p>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Banner;