import React, { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ListOfGames from '../ListOfGames';
const LandingPage: FC = ({ children }) => {
    return (
        <Container className='h-75' fluid={'xl'}>
            <Row className='justify-content-md-center h-50'>
                <Col className='align-self-center h-50 text-center' xl={6}>
                    <h1>Brain Games</h1>
                    <h3>Test your skills at these simple games to see how you match up</h3>
                    <Button>Start</Button>
                </Col>
            </Row>
            <ListOfGames />
        </Container>
    )
}

export default LandingPage
