import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioCard from '../PortfolioCard/card';
import PortfolioData from '../../data/portfolio.json';

import './portfolio.css'

const renderCards = (portfolioData) => {
	var cards = [];
	for (let i = 0; i < portfolioData.length; i++) {
		if (portfolioData[i].type === "card") {
			cards.push(
				<Col
					key={ i }
				>
					<PortfolioCard {...portfolioData[i]} />
				</Col>
			)
		}
	}
	return cards;
}

const Portfolio = () => {
	var cards = renderCards(PortfolioData);
	return (
		<Row id="portfolio">
			{ cards }
		</Row>
	);
}

export default Portfolio;