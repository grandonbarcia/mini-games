import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const GameArea: FC = ({ children }) => {
    return (
        <Container className='h-75' fluid={'xl'}>
            <Row className='justify-content-md-center h-100'>
                <Col className='align-self-center h-50' xl={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default GameArea
