//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore , setAwayScore] = useState(32);
  const [timer, setTimer] = useState(0);
  const touchDownHome = e => {
    setHomeScore(homeScore + 7)
  };
  const fieldGoalHome = e => {
    setHomeScore(homeScore + 3)
  };

  const touchDownAway = e => {
    setAwayScore(awayScore + 7)
  };
  const fieldGoalAway = e => {
    setAwayScore(awayScore + 3)
  };

  const [seconds, setSeconds] = useState((15*60));
  const [isActive, setIsActive] = useState(false);

  function toggle(){
    setIsActive(!isActive);
  }

  function reset(){
    setSeconds(900);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if(isActive){
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0){
        clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function timerDisplay(timeRemaining){
    let minutes = Math.floor(timeRemaining / 60);
    let secondsRemainder = Math.floor(timeRemaining % 60);
    if(secondsRemainder < 10){
      secondsRemainder = '0'+ secondsRemainder;
    }
    return <span>{minutes} : {secondsRemainder}</span>
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timerDisplay(seconds)}</div>
          <div className='timer_button'>
            <button onClick={toggle}>Start</button>
            <button onClick={toggle}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={touchDownHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={fieldGoalHome}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={touchDownAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fieldGoalAway}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
