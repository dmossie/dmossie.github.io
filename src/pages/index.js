import React from 'react';
import Intro from '../components/Intro/intro';
import Layout from '../components/Layout/layout';
import Portfolio from '../components/Portfolio/portfolio';

const HomePage = () => (
	<Layout>
		<Intro />
		<Portfolio />
	</Layout>
);

export default HomePage;