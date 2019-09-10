//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreButton from "./ScoreButton";
import Score from "./Score"

function App() {

  const [homeScore, updateHomeScore] = useState(0);
  const [awayScore, updateAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <Score home={homeScore} away={awayScore}/>
        <BottomRow />
      </section>
        <ScoreButton home={homeScore} updateHome={updateHomeScore} away={awayScore} updateAway={updateAwayScore}  />
    </div>
  );
}

export default App;





