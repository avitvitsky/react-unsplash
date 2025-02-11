import styles from "./button.module.css";

export const Button = ({ title, onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {title}
    </button>
  );
};
