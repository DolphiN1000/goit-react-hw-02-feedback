import styles from './notification.module.scss';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;
