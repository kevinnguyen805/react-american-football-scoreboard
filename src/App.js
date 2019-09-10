//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreButton from "./ScoreButton"

function App() {

  const [homeScore, updateHomeScore] = useState(0);
  const [awayScore, updateAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
        <ScoreButton home={homeScore} updateHome={updateHomeScore} away={awayScore} updateAway={updateAwayScore}  />
    </div>
  );
}

export default App;





