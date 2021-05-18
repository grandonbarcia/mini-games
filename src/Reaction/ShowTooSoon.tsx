import React from 'react'
import { Col, Image } from 'react-bootstrap';
import SadFace from '../img/frownFace.png'

const ShowTooSoon = () => {




    return (
        <Col className='text-center'>
            <Image src={SadFace} height={'200px'} />
            <h1>Too Soon</h1>
        </Col>

    )
}

export default ShowTooSoon
