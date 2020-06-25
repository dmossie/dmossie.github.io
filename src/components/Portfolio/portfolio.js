import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioCard from '../PortfolioCard/card';
import PortfolioData from '../../data/portfolio.json';

const renderCards = (allPortfolioData) => {

	// Group portfolio data into groups of three (how many cards I want in a row)
	var rowSize = 3;
	var portfolioData = [];
	for (let i = 0; i < allPortfolioData.length; i += rowSize) {
		portfolioData.push(allPortfolioData.slice(i, i+rowSize));
	}

	var rows = [];
	for (let i = 0; i < portfolioData.length; i++) {
		let cardsInRow = [];
		for (let j = 0; j < portfolioData[i].length; j++) {
			cardsInRow.push(
				<Col
					key={ i + "-" + j }
					xs={ 12 }
					lg= { 4 }
					className={ portfolioData[i][j].type === "banner" ? "banner-card" : "" }
				>
					<PortfolioCard {...portfolioData[i][j]} />
				</Col>
			)
		}
		rows.push(<Row>{ cardsInRow }</Row>);
	}

	return (
		<React.Fragment>
			{rows}
		</React.Fragment>
	);
}

const Portfolio = () => {
	var cards = renderCards(PortfolioData);
	return (
		<div id="portfolio">
			{ cards }
		</div>
	);
}

export default Portfolio;