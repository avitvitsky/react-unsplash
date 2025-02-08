import styles from "./search-field.module.css";
import resetImage from "./reset.svg";
import searchImage from "./search.svg";

export const SearchField = () => {
  return (
    <div className={styles.root}>
      <img src={searchImage} className={styles.search} />
      <input
        className={styles.input}
        placeholder="Телефоны, яблоки, груши..."
      />
      <img src={resetImage} className={styles.reset} />
    </div>
  );
};
