import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <>
      <p className={styles.value}>Good: {good}</p>
      <p className={styles.value}>Neutral: {neutral}</p>
      <p className={styles.value}>Bad: {bad}</p>
      <p className={styles.value}>Total: {total}</p>
      <p className={styles.value}>Positive feedback: {feedbackPercentage}%</p>
    </>
  );
};

export default Statistics;
