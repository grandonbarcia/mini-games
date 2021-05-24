import React, { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ListOfGames from '../ListOfGames';
const LandingPage: FC = ({ children }) => {
    return (
        <Container className='h-75' fluid >
            <Row className='justify-content-center h-75'>
                <Col className='align-self-center h-50 text-center' xl={6}>
                    <Row>
                        <Col>
                            <h1>Brain Games</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Test your skills at these simple games to see how you match up</h4>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <Button as={Link} to='/targetPractice' >Start</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ListOfGames />
        </Container>
    )
}

export default LandingPage
