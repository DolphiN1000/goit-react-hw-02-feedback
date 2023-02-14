import { Component } from 'react';
import styles from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // increaseGood = () => {
  //     this.setState(prevState => {
  //         return {good: prevState.good + 1 }
  //     })
  // }

  // incraseNeutral = () => {
  //     this.setState(prevState => {
  //         return {neutral: prevState.neutral + 1}
  //     })
  // }

  // incraseBad = () => {
  //     this.setState(prevState => {
  //         return {bad: prevState.bad + 1}
  //     }
  //         )
  // }

  incraseValue(name) {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countFeedbackPercentage(propName) {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const feedbackPercentage = this.countFeedbackPercentage('good');
    return (
      <div className={styles.container}>
        <h2>Feedback</h2>
        <div>
          <h3>Please leave feedback</h3>
          {/* <button className={styles.button} onClick={this.increaseGood}>Good</button>
   <button className={styles.button} onClick={this.incraseNeutral}>Neutral</button>
   <button className={styles.button} onClick={this.incraseBad}>Bad</button> */}
          <button
            className={styles.button}
            onClick={() => this.incraseValue('good')}
          >
            Good
          </button>
          <button
            className={styles.button}
            onClick={() => this.incraseValue('neutral')}
          >
            Neutral
          </button>
          <button
            className={styles.button}
            onClick={() => this.incraseValue('bad')}
          >
            Bad
          </button>
        </div>
        <div>
          <h3>Statistic</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {feedbackPercentage}%</p>
        </div>
      </div>
    );
  }
}
export default Feedback;
