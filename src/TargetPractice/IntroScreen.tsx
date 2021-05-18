import React, { FC } from 'react'
import { Row, Col, Button } from 'react-bootstrap'


type Props = {
    startGame: (active: boolean) => void;
}

const IntroScreen: FC<Props> = ({ startGame }) => {
    return (
        <Row>
            <Col className='text-center'>
                <h1> Test Your Aim! </h1>
                <Button variant={'danger'} onClick={() => startGame(true)} >Click Me!</Button>
                <h4>Hit 25 targets as fast as you can</h4>
                <h4>Click the target when ready</h4>
            </Col>
        </Row>
    )
}

export default IntroScreen
