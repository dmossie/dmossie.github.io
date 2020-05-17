import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioBanner from '../PortfolioBanner/banner';
import PortfolioCard from '../PortfolioCard/card';
import PortfolioData from '../../data/portfolio.json';

const renderBanners = (portfolioData) => {
	var banners = [];
	for (let i = 0; i < portfolioData.length; i++) {
		if (portfolioData[i].type === "banner") {
			banners.push(
				<Col
					key={ i }
				>
					<PortfolioBanner {...portfolioData[i]} />
				</Col>
			)
		}
	}
	return (
		<Row>
			{ banners }
		</Row>
	);
}

const renderCards = (portfolioData) => {
	var cards = [];
	for (let i = 0; i < portfolioData.length; i++) {
		cards.push(
			<Col
				key={ i }
				xs={ 12 }
				lg= { 4 }
				className={ portfolioData[i].type === "banner" ? "banner-card" : "" }
			>
				<PortfolioCard {...portfolioData[i]} />
			</Col>
		)
	}
	return (
		<Row>
			{ cards }
		</Row>
	);
}

const Portfolio = () => {
	var banners = renderBanners(PortfolioData);
	var cards = renderCards(PortfolioData);
	return (
		<div id="portfolio">
			{ banners }
			{ cards }
		</div>
	);
}

export default Portfolio;