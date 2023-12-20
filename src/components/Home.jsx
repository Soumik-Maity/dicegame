import styles from "./Home.module.css";
const Home = ({ setIsStarted }) => {
  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.item} ${styles.item1}`}>
        <img src="./images/dices.png" alt="Dice Walpaper" />
      </div>
      <div className={`${styles.item} ${styles.item2}`}>
        <h1>DICE GAME</h1>
        <button type="button" onClick={() => setIsStarted(true)}>
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Home;
