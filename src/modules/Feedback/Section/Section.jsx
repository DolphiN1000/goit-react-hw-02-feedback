import styles from './section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
