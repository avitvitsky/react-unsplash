import styles from "./button.module.css";

export const Button = ({ title }) => {
  return <button className={styles.root}>{title}</button>;
};
