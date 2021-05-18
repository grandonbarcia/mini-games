import React, { useState, useEffect, useRef, FC, CSSProperties } from 'react'
import { Button } from 'react-bootstrap'
import Counter from './Counter'
import GameComplete from './GameComplete'






const GameInProgress: FC = () => {


    const [position, setPosition] = useState({ width: '0px', height: '0px' });
    const [count, setCount] = useState(25);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [buttonVariant, setButtonVariant] = useState('danger');
    const [score, setScore] = useState([] as number[]);
    const [averageScore, setAverageScore] = useState(0);

    const myRef = useRef<HTMLDivElement>(null);

    const counter = () => {
        setCount(() => count - 1);

    }


    const getRandomWidth = () => {
        return Math.floor(Math.random() * (dimensions.width)).toString() + 'px'

    }

    const getRandomHeight = () => {
        return Math.floor(Math.random() * (dimensions.height)).toString() + 'px'

    }



    const movePositions = () => {
        setPosition({ width: getRandomWidth(), height: getRandomHeight() })

    }


    const recordScore = () => {

        const time = new Date().getTime()

        setScore(() => [...score, time])
    }

    const resetGame = () => {
        setCount(25);
        setScore([])
    }

    const handleClick = () => {
        counter();
        movePositions();
        recordScore();
    }

    const convertToMiliSeconds = (arrayOfScores: number[]) => {

        let convertedArray = [];

        for (let i = 0; i < arrayOfScores.length - 2; i++) {

            let startTime = arrayOfScores[i];
            let endTime = arrayOfScores[i + 1];
            let duration = endTime - startTime;

            convertedArray.push(duration)

        }

        return convertedArray

    }

    const getAverage = (arr: number[]) => {

        return arr.reduce((a, b) => a + b, 0) / arr.length


    }

    useEffect(() => {

        if (score.length === 25) {

            let newScore = convertToMiliSeconds(score);
            let average = getAverage(newScore)

            setAverageScore(Math.floor(average))
        }

    }, [score])


    useEffect(() => {

        if (count % 5 === 0 && count < 25) {
            setButtonVariant('warning')

        } else {
            setButtonVariant('danger')
        }

    }, [count])

    useEffect(() => {

        if (myRef.current) {
            setDimensions({
                width: myRef.current.offsetWidth,
                height: myRef.current.offsetHeight
            });
        }
    }, []);





    const style: CSSProperties = {

        marginLeft: position.width,
        marginTop: position.height,
        position: 'absolute',
        height: '75px',
        width: '100px',
        zIndex: 10,

    }


    if (count === 0) {
        return (
            <GameComplete average={averageScore} resetGame={resetGame} />
        )
    }
    return (
        <div className='h-100' ref={myRef}>

            <Counter count={count} />
            <Button
                style={style}
                variant={buttonVariant}
                onClick={handleClick}
            >
                Catch Me
            </Button>
        </div>
    )
}

export default GameInProgress
