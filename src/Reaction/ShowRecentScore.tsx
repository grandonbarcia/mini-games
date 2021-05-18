import React, { FC } from 'react'
import { Col } from 'react-bootstrap';

interface Props {
    recentScore: number
}

const ShowRecentScore: FC<Props> = ({ recentScore }) => {
    return (
        <Col className='text-center'>
            <h1>{recentScore}ms</h1>
            <h2>Click To keep going</h2>
        </Col>

    )
}

export default ShowRecentScore
