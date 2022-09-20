import React from 'react';
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navbar.css'

export default function NavbarComp() {

    return (
        <Navbar className="NAV" bg="primary">
            <div className="contents">
                <Container>
                    <Nav className="me-auto">
                        <NavLink className="navlink">
                            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}><span>FuelQ</span></Link>
                        </NavLink>
                    </Nav>
                </Container>
            </div>
        </Navbar>
    );
}
