import React, { FC, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import ShowRecentScore from './ShowRecentScore';
import ShowTooSoon from './ShowTooSoon';
import GameOver from './GameOver'

const RED = '#C13C39'
const GREEN = '#88B435'


type Props = {
    startGame: (active: boolean) => void;
}


const ReactionGame: FC<Props> = ({ startGame }) => {

    const [bgColor, setBgColor] = useState(RED)
    const [text, setText] = useState('Wait For Green');
    const [startTime, setStartTime] = useState(0);
    const [score, setScore] = useState([] as number[]);
    const [gamePause, pauseGame] = useState(false);
    const [tooSoon, setTooSoon] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [average, setAverage] = useState(0)


    const style = {

        backgroundColor: bgColor,
        borderRadius: '15px'

    }


    useEffect(() => {

        if (score.length !== 5) {

            if (!gamePause && bgColor === RED) {

                const randomNum = Math.floor(Math.random() * 8) + 3
                const timeout = setTimeout(() => {
                    setBgColor(GREEN);
                    setText('Click!');
                    setStartTime(new Date().valueOf())
                }, randomNum * 1000);

                return () => clearTimeout(timeout);
            }
        } else {
            setGameOver(true);
        }
    }, [bgColor, gamePause])

    useEffect(() => {

        if (score.length !== 5) {
            setBgColor(RED);
            setText('Wait For It...')
        } else {
            setAverage(Math.floor((score.reduce((acc, curr) => acc + curr)) / score.length))
            setGameOver(true);
        }

    }, [score])

    useEffect(() => {
        return () => {
            startGame(false);
        }
    }, [])


    const handleClick = () => {


        if (bgColor === RED) {
            setTooSoon(true);
            pauseGame(true);
        } else {
            recordScore();
            pauseGame(true);
        }

    }

    const recordScore = () => {

        let endTime = new Date().valueOf();
        let result = endTime - startTime;
        setScore((prev) => [...prev, result]);


    }

    const unPauseGame = () => {
        setTooSoon(false);
        pauseGame(false);
    }

    const resetGame = () => {

        setScore([]);
        pauseGame(false);
        setGameOver(false);

    }


    if (gameOver) {
        return (
            <Row className='h-100 align-items-center'>
                <GameOver average={average} resetGame={resetGame} />
            </Row>
        )

    } else if (gamePause) {
        return (
            <Row className='h-100 align-items-center' onClick={unPauseGame}>
                { tooSoon ? <ShowTooSoon /> : <ShowRecentScore recentScore={score[score.length - 1]} />}
            </Row>

        )
    } else {
        return (
            <Row className='h-100 align-items-center' style={style} onClick={handleClick}>
                <Col className='text-center'>
                    <h1>{text}</h1>
                </Col>
            </Row>
        )

    }
}

export default ReactionGame
