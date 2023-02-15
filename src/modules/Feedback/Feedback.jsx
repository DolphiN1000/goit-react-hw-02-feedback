import { Component } from 'react';
import styles from './feedback.module.scss';
import Section from './Section/Section';
import FeedbackVariants from './FeedbackVariants/FeedbackVariants';
import Statistics from './Statistics/Statistics';
import '../../shared/styles/styles.scss';
import Notification from 'shared/components/Notification/Notification';

const feedbackOptions = ['good', 'neutral', 'bad'];
const message = 'There is no feedback';
// const statisticOptions = [];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incraseValue = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countFeedbackPercentage(propName) {
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
        <Section title="Please leave feedback">
          <FeedbackVariants
            options={feedbackOptions}
            leaveFeedback={this.incraseValue}
          />
        </Section>
        <Section title="Statiatics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedbackPercentage={feedbackPercentage}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
