import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { GiFlyingTarget } from 'react-icons/gi'
import { RiTimerFlashFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';


const SIZE = '8em'

const ListOfGames = () => {

    const panel = {
        backgroundColor: 'white',
        borderRadius: '10px',
        height: '75%',
        paddingTop: '2%',
        marginTop: '50px'
    }

    return (
        <Row className='justify-content-md-center h-50' style={{ backgroundColor: '#eeeeee' }} >
            <Col as={Link} style={{ textDecoration: 'none', color: '#393e46' }} to={'/targetPractice'} className='text-center h-100' sm={4} md={4} lg={4} xl={4} xl={4}>
                <div className='list__of__games' style={panel}>

                    <Row>
                        <Col >
                            <GiFlyingTarget size={SIZE} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='title'>Target Practice</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='sub-title'>
                            Test your aim and Hit all the targets!
                        </Col>
                    </Row>
                </div>

            </Col>

            <Col as={Link} style={{ textDecoration: 'none', color: '#393e46' }} to={'/quickDraw'} className='text-center h-100' sm={4} md={4} lg={4} xl={4}>
                <div className='list__of__games' style={panel}>

                    <Row>
                        <Col>
                            <RiTimerFlashFill size={SIZE} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='title'>Quick Draw</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className='sub-title'>How fast are you on the click?</div>
                        </Col>
                    </Row>
                </div>

            </Col>

        </Row >




    )
}

export default ListOfGames
