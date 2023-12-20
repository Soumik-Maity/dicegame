import styles from "./RoleDice.module.css";
import ErrorMessage from "./ErrorMessage.jsx";
const RoleDice = ({
  randomNumber,
  setRandomNumber,
  selectedNumber,
  setSelectedNumber,
  score,
  setScore,
  errorMessage,
  setErrorMessage,
}) => {
  const handleOnCLick = (max, min) => {
    if (selectedNumber === undefined) {
      console.log("Select a number and then roll dice");
      setErrorMessage("Select a number and then roll dice");
      return;
    }
    let newRandomNumber = Math.floor(Math.random() * (max - min) + min);
    let newScore = score;
    setRandomNumber(newRandomNumber);
    if (newRandomNumber === selectedNumber) {
      newScore = newScore + selectedNumber;
    } else {
      newScore = newScore - 2;
    }
    setScore(newScore);
    setSelectedNumber(undefined);
  };
  return (
    <div className={`${styles.container}`}>
      <img
        onClick={() => handleOnCLick(7, 1)}
        src={`./images/result/dice${randomNumber}.png`}
      />
      <h1>Click on Dice to Roll</h1>
    </div>
  );
};

export default RoleDice;
