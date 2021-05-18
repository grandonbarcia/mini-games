import React, { FC } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Nav: FC = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand as={Link} to='/' >Brain Games</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav
