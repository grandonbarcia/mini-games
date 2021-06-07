import React, { FC } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

type Props = {
    startGame: (active: boolean) => void;
}


const ReactionIntro: FC<Props> = ({ startGame }) => {
    return (
        <Row className='h-100'>
            <Col className='text-center'>
                <h1> Reaction Time Test </h1>
                <h4>When  the red box turns green, click as quickly as you can.</h4>
                <Button onClick={() => startGame(true)}>Start</Button>
            </Col>
        </Row>
    )
}

export default ReactionIntro
