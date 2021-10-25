import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/red-ecommerce.png';
import './Header.css';

const Header = () => {
    return (
        <div className='navber'>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">
                        <div className='d-flex justify-content-center align-items-center'>
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <h5 className='fw-bold'>RED ECOMMERCE</h5>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home" className='fw-bold'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/prodcts" className='fw-bold'>
                                Products
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;