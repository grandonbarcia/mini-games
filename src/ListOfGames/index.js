import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { GiFlyingTarget } from 'react-icons/gi'
import { RiTimerFlashFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const SIZE = 150

const ListOfGames = () => {
    const style = {
        backgroundColor: '#eeeeee',
        color: '#393e46',
        height: '100%',
        paddingTop: '20%',
        borderRadius: '25px'
    }
    return (

        <Row className='justify-content-md-center h-50' >
            <Col as={Link} style={{ textDecoration: 'none' }} to={'/targetPractice'} className='text-center' xl={4}>
                <div style={style}>
                    <Row>
                        <Col >
                            <GiFlyingTarget size={SIZE} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Target Practice</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='sub-title'>
                            Test your aim and Hit all the targets!
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col as={Link} style={{ textDecoration: 'none' }} to={'/quickDraw'} className='text-center' xl={4}>
                <div style={style}>
                    <Row>
                        <Col>
                            <RiTimerFlashFill size={SIZE} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Quick Draw</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='sub-title'>
                            How fast are you on the click?
                    </Col>
                    </Row>
                </div>
            </Col>

        </Row >



    )
}

export default ListOfGames
