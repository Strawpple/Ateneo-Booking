import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


// images
import Addu from "../icons/UniversitySeal240px.png";

function navbar() {
    return (
        <div>
            <Navbar
                collapseOnSelect
                fixed="top"
                className="navbar justify-content-center"
            >
                <Container className="contents">
                    <img id="adduSeal" href="/" src={Addu} />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className="font-link-contents"
                                href="/announcement"
                            >
                                Announcement
                            </Nav.Link>
                            <Nav.Link
                                className="font-link-contents"
                                href="/dashboard"
                            >
                                Dashboard
                            </Nav.Link>
                            <Nav.Link
                                className="font-link-contents"
                                href="/calendar"
                            >
                                Calendar
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default navbar;
