import styles from './Container.module.scss';

const Container = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;