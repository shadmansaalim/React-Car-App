import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand collapseOnSelect expand="lg" href="#home">Car</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            {
                                user?.email ? <Button onClick={logOut} variant="light">
                                    Log Out
                                </Button>
                                    :
                                    <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;