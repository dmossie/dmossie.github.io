import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layout";

const HomePage = () => (
	<Layout>
		<Row>
			<Col>
				<p>
					<span>My name is Daniel Mossie and I am a Software Developer living in Victoria, British Columbia.</span>
					<span>This website is hosted using Github Pages. Check out my Github page here: <a href="https://github.com/dmossie">@dmossie</a></span>
					<span>Feel free to contact me at: <a href="mailto:mail@danielmossie.com">mail@danielmossie.com</a></span>
				</p>
			</Col>
		</Row>
	</Layout>
);

export default HomePage;