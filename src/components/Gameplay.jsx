import TotalScore from "./TotalScore.jsx";
import SelectNumber from "./SelectNumber.jsx";
import styles from "./Gameplay.module.css";
import RoleDice from "./RoleDice.jsx";
import { useState } from "react";
import ShowRules from "./ShowRules.jsx";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [randomNumber, setRandomNumber] = useState(4);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const handleResetScoreClicked = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setErrorMessage("");
  };

  const handleShowRulesClicked = () => {
    let newShowRules = !showRules;
    setShowRules(newShowRules);
  };
  return (
    <>
      <div className={`${styles.container}`}>
        <TotalScore score={score} />
        <SelectNumber
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <RoleDice
        randomNumber={randomNumber}
        setRandomNumber={setRandomNumber}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        setScore={setScore}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <div className={`${styles.buttonContainer}`}>
        <button
          type="button"
          className={`${styles.btn1}`}
          onClick={handleResetScoreClicked}
        >
          Reset Score
        </button>
        <button className={`${styles.btn2}`} onClick={handleShowRulesClicked}>
          Show Rules
        </button>
      </div>
      <div className={`${styles.showRules}`}>{showRules && <ShowRules />}</div>
    </>
  );
};

export default Gameplay;
