import React, { FC } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

interface Props {

    average: number,
    resetGame: () => void

}

const GameComplete: FC<Props> = ({ average, resetGame }) => {
    return (
        <Row className='text-center'>
            <Col>
                <Row>
                    <Col>
                        <Button variant={'success'}> Finish! </Button>
                    </Col>
                </Row>


                <Row className='pt-5'>
                    <Col>
                        <h4>Average Time per Button</h4>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <h1>{average}ms</h1>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <Button onClick={resetGame} variant={'outline-primary'}>Try again</Button>
                    </Col>
                </Row>


            </Col>
        </Row>
    )
}

export default GameComplete
