import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layout";
import PortfolioCard from "../components/card";
import PortfolioData from '../data/portfolio.json';

const Portfolio = () => {
	let cards = renderCards(PortfolioData);

	return (
		<Layout>
			<Row>
				{ cards }
			</Row>
		</Layout>
	)
};

const renderCards = (portfolioData) => {
	let cards = [];
	for (let i = 0; i < portfolioData.length; i++) {
		cards.push(
			<Col>
				<PortfolioCard {...portfolioData[i]} />
			</Col>
		)
	}
	return cards;
}

export default Portfolio;