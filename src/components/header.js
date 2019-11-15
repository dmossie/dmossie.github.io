import React from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
    <Navbar id="navbar">
        <Navbar.Brand>Daniel Mossie</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
        </Nav>
    </Navbar>
);

export default Header;