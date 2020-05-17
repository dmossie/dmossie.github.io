import React from 'react';
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container"

import './layout.css'

require("smooth-scroll")('a[href*="#"]')

const Layout = (props) => (
    <React.Fragment>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
        </Helmet>
        <main id='main'>
            <Container>
                { props.children }
            </Container>
        </main>
    </React.Fragment>
);

export default Layout;