import React, { FC } from 'react'
import { Row, Col, Button } from 'react-bootstrap';



interface Props {

    average: number,
    resetGame: () => void

}


const GameOver: FC<Props> = ({ average, resetGame }) => {
    return (
        <Col className='text-center'>
            <Row>
                <Col >
                    Average
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>{average}ms</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant={'primary'} onClick={resetGame}>Try Again</Button>
                </Col>
            </Row>
        </Col>
    )
}

export default GameOver
