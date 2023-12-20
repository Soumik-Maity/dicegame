import styles from "./TotalScore.module.css";
const TotalScore = ({ score }) => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.header}`}>{score}</h1>
      <p className={`${styles.para}`}>Total Score</p>
    </div>
  );
};

export default TotalScore;
