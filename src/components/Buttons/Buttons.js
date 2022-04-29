import styles from './Buttons.module.scss';

const Button = ({ start, stop, reset }) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => start()}>start</button>
      <button className={styles.button} onClick={() => stop()}>stop</button>
      <button className={styles.button} onClick={() => reset()}>reset</button>
    </div>
  );
};
export default Button;