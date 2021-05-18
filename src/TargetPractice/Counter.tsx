import React, { FC, CSSProperties } from 'react'


interface Props {
    count: number
}

const Counter: FC<Props> = ({ count }) => {

    const style: CSSProperties = {
        fontSize: '200px',
        fontWeight: 'bold',
        position: 'absolute',
        margin: '0px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div style={style}>
            {count}
        </div>
    )
}

export default Counter
