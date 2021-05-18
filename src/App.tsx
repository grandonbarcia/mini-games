import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GameArea from './TargetPractice/GameArea';
import GameInProgress from './TargetPractice/GameInProgress';
import IntroScreen from './TargetPractice/IntroScreen';
import ReactionIntro from './Reaction/ReactionIntro'
import ReactionGame from './Reaction/ReactionGame'
import NavBar from './Navbar/Nav'
import LandingPage from './LandingPage/index'



const App: FC = () => {

  const [gameStarted, startGame] = useState(false);

  return (
    <div className='App'>



      {/* <GameArea> */}
      {/* {gameStarted ? <GameInProgress /> : <IntroScreen startGame={startGame} />} */}
      {/* {gameStarted ? <ReactionGame /> : <ReactionIntro startGame={startGame} />} */}
      {/* </GameArea> */}

      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/targetPractice'>
            <GameArea>
              {gameStarted ? <GameInProgress /> : <IntroScreen startGame={startGame} />}
            </GameArea>
          </Route>
          <Route exact path='/quickDraw'>
            <GameArea>
              {gameStarted ? <ReactionGame /> : <ReactionIntro startGame={startGame} />}
            </GameArea>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
